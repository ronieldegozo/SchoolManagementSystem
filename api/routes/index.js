const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const { userDashboard, userHome ,getAddSubject, postAddSubject, getDashboardSubject} = require('../controller/users');
const {getIndex,postAddUser } = require('../controller/student');

// Welcome Page
router.get('/', forwardAuthenticated,userHome );

router.get('/add-student', ensureAuthenticated, getIndex);

router.post('/add', postAddUser);

// Dashboard
router.get('/dashboard', ensureAuthenticated, userDashboard);


//ADDING SUBJECT
router.get('/add-subject',ensureAuthenticated, getAddSubject );

router.post('/add-subject', postAddSubject );

//LIST OF SUBJECT
router.get('/subject',ensureAuthenticated, getDashboardSubject);



module.exports = router;
