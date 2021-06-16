const Personal = require('../models/Student');
const sequelize = require('sequelize');
const Op = sequelize.Op;

//FETCH INDEX PAGE
exports.getIndex = (req,res,next) =>{
    res.render('index', {
        pageTitle: 'Data Entry',
        editing: false
    });
 }

//ADD NEW STUDENTS
 exports.postAddUser = (req, res, next) => {
    const {studType,studentNumber,lastname,firstname,middleInitial,birthday,age,housenum,street,barangay,municipality,city,
       cnumber,email,gender,nationality,religion,collegeDepartment,course,year
      } = req.body;
    
      console.log(studentNumber);

      Personal.findAll({ where: { id: studentNumber } })
    
        Personal.create({
          studType: studType,
          studentNumber: studentNumber,
          lastname: lastname,
          firstname: firstname,
          middleInitial: middleInitial,
          birthday: birthday,
          age: age,
          housenum: housenum,
          street:street,
          barangay:barangay,
          municipality:municipality,
          city:city,
          cnumber:cnumber,
          email: email,
          gender: gender,
          nationality: nationality,
          religion: religion,
          collegeDepartment: collegeDepartment,
          course: course,
          year: year,
      })
      
    
        .then(result =>{
          // console.log('User Created Successfully');
          // res.redirect('/');
          console.log('User Created Successfully');
          req.flash('success_msg','User Created Successfully'); 
          res.redirect('dashboard');
        })
      
        .catch(err =>{
          console.log(err);
        })

    
  };
  
//GET ALL STUDENT RECORD
exports.getStudent = (req,res,next) =>{
  Personal.findAll()

  .then((students)=>{
    res.render('dashboard', {
      stud: students,
      pageTitle: 'Student Information',
      // name: true
    });
    // console.log(students);
  })

  .catch((err)=>{
    console.log(err);
  })
  
}


//EDIT = FETCH STUDENT INFORMATION 
exports.getEditStudent = (req, res, next) => {

  // const editMode = req.query.edit;
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const studId = req.params.studentId;
  req.user
    // .getProducts({ where: { id: studId } })
    Personal.findAll({ where: { id: studId } })


    .then(products => {
      const stud = products[0];
      if (!stud) {
        return res.redirect('/dashboard');
      }
      res.render('index', {
        pageTitle: 'Edit Student',
        editing: editMode,
        stud: stud
      });

    })
    .catch(err => console.log(err));
};



//POST EDIT STUDENT INFORMATION
exports.postEditStudent = (req,res,next) =>{
  const studId = req.body.studentId;
  const upstudType = req.body.studType;
  const upstudentNumber = req.body.studentNumber;
  const uplastname = req.body.lastname;
  const upfirstname = req.body.firstname;
  const upmiddleInitial = req.body.middleInitial;
  const upbirthday = req.body.birthday;
  const upage = req.body.age;
  const uphousenum = req.body.housenum;
  const upstreet = req.body.street;
  const upbarangay = req.body.barangay;
  const upmunicipality = req.body.municipality;
  const upcity = req.body.city;
  const upcnumber = req.body.cnumber;
  const upgender = req.body.gender;
  const upemail = req.body.email;
  const upnationality = req.body.nationality;
  const upreligion = req.body.religion;
  const upcollegeDepartment = req.body.collegeDepartment;
  const upcourse = req.body.course;
  const upyear = req.body.year;

  Personal.findByPk(studId)
    .then(students => {
      students.studType = upstudType;
      students.studentNumber = upstudentNumber;
      students.lastname = uplastname;
      students.firstname = upfirstname;
      students.middleInitial = upmiddleInitial;
      students.birthday = upbirthday;
      students.age = upage;
      students.housenum = uphousenum;
      students.street = upstreet;
      students.barangay = upbarangay;
      students.municipality = upmunicipality;
      students.city = upcity;
      students.cnumber = upcnumber;
      students.gender = upgender;
      students.email = upemail;
      students.nationality = upnationality;
      students.religion = upreligion;
      students.collegeDepartment = upcollegeDepartment;
      students.course = upcourse;
      students.year = upyear;
      
      return students.save();
      // students.push(students);
    })
    .then(result => {
      console.log('Student Updated!');
      res.redirect('dashboard');
    })
    .catch(err => console.log(err));

}

//DELETE SPECIFIC STUDENT
exports.deleteStudent = (req,res,next) => {
  const studentId = req.body.studentId;
  console.log(studentId);

  Personal.destroy({ where: { id: studentId } })
    .then(student => {
      console.log('DESTROYED Student');
      res.redirect('dashboard');
      req.flash('delete_msg','User Delete Successfully'); 
      return;
    })
    // .then(student => {
    //   console.log('DESTROYED PRODUCT');
    //   req.flash('delete_msg','User Delete Successfully'); 
    //   res.redirect('student');
    // })
    .catch(err => console.log(err));
}

//search student
exports.searchStudent = (req, res) =>{
  const {term} = req.query;

  Personal.findAll({where: {
       religion : { [Op.like]: '%' + term + '%' }  
      }
  })
      .then((gigs) =>{
           res.render('dashboard', {
              stud: gigs,
              pageTitle: term
           });
      })

      .catch(err =>{
          console.log(err);
      })
}