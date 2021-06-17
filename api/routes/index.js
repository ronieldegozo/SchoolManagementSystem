const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const { userDashboard, userHome ,getAddSubject, postAddSubject, getEditSubject,postEditStudent, postDeleteSubject, getDashboardSubject} = require('../controller/users');
const {getIndex,postAddUser } = require('../controller/student');

// Welcome Page
router.get('/', forwardAuthenticated,userHome );

router.get('/add-student', ensureAuthenticated, getIndex);

router.post('/add', postAddUser);

// Dashboard
router.get('/dashboard', ensureAuthenticated, userDashboard);


//ADDING SUBJECT
router.get('/add-subject',ensureAuthenticated, getAddSubject );

//add subject
router.post('/add-subject', postAddSubject );

//edit subject
router.get('/edit-subject/:subjectId', getEditSubject);

//post edit subject
router.post('/edit-subject', postEditStudent);

//post delete subject
router.post('/delete-subject', postDeleteSubject );



//LIST OF SUBJECT
router.get('/subject',ensureAuthenticated, getDashboardSubject);





module.exports = router;
