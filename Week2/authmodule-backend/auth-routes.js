const express= require('express');
const { register, login, changePassword } = require('./auth-controller');
const authenticate = require('./middleware');

const router= express.Router();

router.post('/register',register)
router.post('/login',login);
router.post('/changepassword',authenticate,changePassword);

module.exports=router;