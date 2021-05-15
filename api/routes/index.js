const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const { userDashboard, userHome } = require('../controller/users');
const {getIndex,postAddUser } = require('../controller/student');

// Welcome Page
router.get('/', forwardAuthenticated,userHome );

router.get('/add-student', ensureAuthenticated, getIndex);

router.post('/add', postAddUser);

// Dashboard
router.get('/dashboard', ensureAuthenticated, userDashboard);





module.exports = router;
