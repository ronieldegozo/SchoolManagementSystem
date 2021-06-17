
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const passport = require('passport');
const Personal = require('../models/Student');
const Subject = require('../models/Subject');


exports.userHome = (req, res) => 
    res.render('welcome', {
    pageTitle: 'Home',
    path: '/'
})

exports.getUserRegister = (req, res) => 
    res.render('register', { 
    pageTitle: 'Register'
})


exports.userDashboard =  (req, res) => 

Personal.findAll()

.then((students)=>{
  res.render('dashboard', {
    stud: students,
    pageTitle: 'Dashboard',
    user: req.user,
    // name: true
  });
  // console.log(students);
})

.catch((err)=>{
  console.log(err);
})




exports.userRegister = (req,res)=>{
  const {name ,nickname ,email, password, password2} = req.body;
  let errors = [];
  

  //check required fileds
  if(!name || !nickname || !email || !password, !password2 ){
      errors.push({ msg: 'Please fill in all fields'});
  }
  
  //check password match
  if(password != password2 ){
      errors.push({ msg: 'Passwords do not match'});
  }

  //check pass length

  if(password.length <6){
      errors.push({ msg: 'Password should be atleast 6 character'});
  }

  if(errors.length >0){
      res.render('register', {
          errors, name, nickname,email, password, password2, pageTitle: 'Register'
      });
  }else{

    User.findOne({ where: { email: email } })
    
    .then(user =>{
        if(user){
            //user exist
            errors.push({ msg: 'Email is already Taken'});
            res.render('register', {
                errors, name, nickname,email, password, password2,  pageTitle: 'Register'
            });
        }else{
            const newUser = new User({
                name,
                nickname,
                email,
                password
            });
            //hashpassword
            bcrypt.genSalt(10, (err, salt)=>{
                bcrypt.hash(newUser.password, salt, (err,hash) => {
                    if(err) throw err;

                    //setpassword to hash
                    newUser.password = hash;
                    //save the user
                    newUser.save()
                        .then(user => {
                            req.flash('success_msg','You are now Registered and can Log in'); //flash message for success user registation
                            res.redirect('/');
                        })
                        .catch(err => console.log(err));
                })
            })
        }
    })
    .catch((err)=>{
        console.log(err);
    });

  }
}, 

exports.userLogin = (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/',
      failureFlash: true,

    })(req, res, next);
  }

exports.userLogout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/');
  }



  //get add subject
  exports.getAddSubject = (req, res) => {
      res.render('admin/addSubject', {
          pageTitle: 'Add Subject',
          editing: false
      })
  }

  exports.postAddSubject = (req, res) => {
      const {subjectCode, subjectName, units, hour, subjectCategory, facultyName} = req.body;

      Subject.create({
        subjectCode: subjectCode,
        subjectName: subjectName,
        units: units,
        hour: hour,
        subjectCategory: subjectCategory,
        facultyName: facultyName
      })

      .then(result =>{
          console.log(result);
          res.redirect('subject');
      })


      .catch((err) =>{
          console.log(err)
      })
  }



  //get edit subjects
  exports.getEditSubject = (req, res, next) => {

    // const editMode = req.query.edit;
    const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/');
    }
    const subjectId = req.params.subjectId;

    req.user
      // .getProducts({ where: { id: studId } })
      Subject.findAll({ where: { id: subjectId } })
  
      .then(products => {
        const stud = products[0];
        if (!stud) {
          return res.redirect('/subject');
        }
        res.render('admin/addSubject', {
          pageTitle: 'Edit Subject',
          editing: editMode,
          stud: stud
        });
  
      })
      .catch(err => console.log(err));
  };
  
  //post edit subjects
exports.postEditStudent = (req, res) => {
   
    const studId = req.body.subjectId;
    const upsubjectCode = req.body.subjectCode;
    const upsubjectName = req.body.subjectName;
    const upunits = req.body.units;
    const uphour= req.body.hour;
    const upsubjectCategory = req.body.subjectCategory;
    const upfacultyName = req.body.facultyName;
 
  
    Subject.findByPk(studId)
      .then(subject => {
        subject.subjectCode = upsubjectCode;
        subject.subjectName = upsubjectName;
        subject.units = upunits;
        subject.hour = uphour;
        subject.subjectCategory = upsubjectCategory;
        subject.facultyName = upfacultyName;

        return subject.save();
      })
      .then(result => {
        console.log('Subject Updated!');
        res.redirect('/subject');
      })
      .catch(err => console.log(err));
  
}






//delete subject
exports.postDeleteSubject = (req,res,next) => {
    const subjectId = req.body.subjectId;

  
    Subject.destroy({ where: { id: subjectId } })
      .then(student => {
        console.log('DESTROYED SUBJECT');
        res.redirect('subject');
        req.flash('delete_msg','User Delete Successfully'); 
        return;
      })
      .catch(err => console.log(err));
  }



  //display list of subject
  exports.getDashboardSubject = (req, res) =>{
    
    Subject.findAll()

    .then((subjects)=>{
        res.render('admin/subjectDashboard', {
            pageTitle: 'Subjects',
            sub: subjects,
            user: req.user
        })
    })

    .catch((err) =>{
        console.log(err);
    })

  }



