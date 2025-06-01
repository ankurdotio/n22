const express = require('express');
const router = express.Router();
const userControllers = require("../controllers/user.controller")


router.post('/register',userControllers.registerUser)
router.post('/login',userControllers.loginUser);


module.exports = router