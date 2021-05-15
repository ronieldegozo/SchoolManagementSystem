const express = require('express');
const router = express.Router();
// Load User model

const { forwardAuthenticated } = require('../config/auth');
const { userRegister, userLogin , userLogout, getUserRegister, userHome} = require('../controller/users');

// Login Page
router.get('/', userHome);

// Register Page
router.get('/register', forwardAuthenticated, getUserRegister);

// Register
router.post('/register', userRegister );

// Login
router.post('/login', userLogin);

// Logout
router.get('/logout', userLogout);



module.exports = router;
