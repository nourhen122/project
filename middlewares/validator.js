const express = require ('express')
const { check, validationResult } = require('express-validator');
const req = require('express/lib/request');


exports.registerRules = () => [
    check ('fullName' , 'This filed is required').notEmpty() ,
    check ('email' , 'This filed is required').notEmpty() ,
    check ('email' , 'This filed should be a valid email').isEmail() ,
    check ('password' , 'This filed should be at least 6 characters ').isLength({min:6}) 
];


exports.validator = (req,res,next) => {
    const errors = validationResult(req) ;
    errors.isEmpty()? next() : res.status(406).json({errors:errors.array()})
}