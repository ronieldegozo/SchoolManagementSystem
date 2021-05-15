const express = require('express');
const { getStudent,  getEditStudent,postEditStudent,deleteStudent,searchStudent } = require('../controller/student');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const router = express.Router();

//GET STUDENTS
router.get('/student', ensureAuthenticated, getStudent);

//GET EDIT STUDENT
router.get('/edit-student/:studentId', ensureAuthenticated, getEditStudent);

//POST EDIT STUDENT
router.post('/edit-student', postEditStudent);

//delete student
router.post('/delete-student/', deleteStudent);


//search student
router.get('/dashboard/search', searchStudent); 

module.exports = router;
