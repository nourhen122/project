const express = require('express');
const { register, getUsers } = require('../controllers/user.controller');
const { registerRules ,validator} = require('../middlewares/validator');
const router = express.Router()
 


router.post('/register',registerRules(),validator,register);
router.get('/getUsers',getUsers)


module.exports = router
