const bcryptjs = require("bcryptjs");
const res = require("express/lib/response");
const User = require("../models/User")


exports.register = async (req,res) => {
    const {fullName,email,password,phone,adress,certificate,specialty,postalCode}=req.body ;
   
    const existantUser = await User.findOne ({email})
    if (existantUser)return  res.status(409).json({msg:'User already exists!' })
try {
    const newUser = new User({
        fullName,
        email ,
        password,
        phone , 
        adress,
        certificate,
        specialty,
        postalCode
    })
    var salt = await bcryptjs.genSalt(10);
    var hash = await bcryptjs.hash(password, salt);
    newUser.password = hash
    await newUser.save();
    res.status(200).json ({msg:'Registration successful!'});
} catch (error) {
    res.status (500).json ({msg:error.message})
}
}


exports.getUsers = async(req,res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
    res.status (500).json ({msg:error.message})
        
    }
}