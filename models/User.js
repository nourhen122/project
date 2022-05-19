const mongoose = require ('mongoose')
const schema = mongoose.Schema


const userSchema = new schema ({
    fullName : String ,
    email : String,
    password:String,
    phone : Number,
    certificate:String,
    specialty:String,
    adress :String,
    postalCode:String,

});

module.exports = mongoose.model('User' , userSchema);
