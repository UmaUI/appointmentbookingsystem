const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const mongojs = require('mongojs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const userRegister = require('../models/user');
const appointmentuserRegister = require('../models/userappointment');
const descriptiondoctorRegister = require('../models/doctordescription');
const feedbackuserRegister = require('../models/userfeedback');
const adminRegister = require('../models/admin');
const doctorRegister = require('../models/doctor');
const consulttimeRegister = require('../models/consulttime');
const config = require('../config/database');
var app = express();
const randomstring = require('randomstring');
const mailer = require('../routes/mailer');
//let fs = require('fs-extra');
'use strict';
//
// set the directory for the uploads to the uploaded to
//var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
//var upload = multer({dest: DIR}).single('photo');

//var storage = multer.diskStorage({
  
  //destination: function (req, file, cb) {
    //let userId = req.body._id;
    //let path = `src/assets/uploads//${userId}`;
    //fs.mkdirsSync(path);
   // cb(null, path);
 // },
 // filename: function (req, file, cb) {
   // var d = new Date();
   // var n = d.getDate();
     // cb(null,  d.getDate() + '-'+ d.getMonth() + '-'+ d.getFullYear() + '-' + file.originalname)
     // console.log('file result' + d.getDate() + '-'+ d.getMonth() + '-'+ d.getFullYear() + '-' + file.originalname);
//}
//})

//var upload = multer({ storage: storage }).single('photo');
/* GET home page. */
//var storage = multer.diskStorage({
 // destination: function (req, file, cb) {
   // cb(null, './uploads/')
   // console.log('well done');
    //console.log(file);
  //},
  //filename: function (req, photo,cb) {
   // if(photo.originalname.match(/\.(jpeg|jpg|png|wav)$/)){
     // var err = new Error();
     // err.code = 'filetype';
    //  return cb(err);
    //}else{
   // cb(null, Date.now() + '-'+ photo.originalname );
   // }
 // }
//});
//router.get('/upload', function(req, res, next) {
// render the index page, and pass data to it.
  //res.render('index', { title: 'Express' });
//});
//router.get('/upload', function(req, res, next) {
  // render the index page, and pass data to it.
    //res.render('index', { title: 'Express' });
 // });
  
  //our file upload function.
  //router.post('/upload', function(req, res, next){
   // console.log("file"+req.file+req.files);
    //res.send('Successfully uploaded!');
  //});

 //router.post('/upload', function (req, res, next) {
   //   var path = '';
      
     //  upload(req, res, function (err) {
     //     if (err) {
            // An error occurred when uploading
     //      console.log(err);
     //       return res.status(422).json("an Error occured")
    //    }  
         // No error occured.
    //      path = req.file.path;
    //      console.log(path);
   //       return res.json("Upload Completed for "+path); 
  // });     
  //})

 

//Register
router.post('/register', (req, res, next)=>{
  let newuserRegister = new userRegister ({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      dateofbirth: req.body.dateofbirth,
      gender: req.body.gender,
      mobileno: req.body.mobileno,
      altermobileno: req.body.altermobileno,
      country: req.body.country,
      state: req.body.state,
      address1: req.body.address1,
      address2: req.body.address2,
      profileimg: req.body.profileimg,
      pid: req.body.pid,
      //generate secret token
      secretToken: randomstring.generate(),
      //let account as inactive
      active: false
  });
   console.log(newuserRegister.secretToken);
   //compose an email
 
  
  userRegister.adduserRegister(newuserRegister, (err, user)=>{
       if(err){
           res.json({success: false, msg:'Failed to register user'});
       } else {
        const html = 'Hi there, <br/>Thank you for registering! <br/><br/> Please verify your email by typing the following token: <br/> Token:<b>'+newuserRegister.secretToken+'</b><br/>On the following page: <a href="http://localhost:3000/user/verify">http://localhost:3000/user/verify</a><br/><br/>Have a pleasant day!';
        
        //send the email
        mailer.sendEmail('admin@consultonline.com', newuserRegister.email , 'Please verify your email', html);
           res.json({success: true, msg:'User Registered'});
       }
  });
});

//Register Appointment
router.post('/appointmentregister', (req, res, next)=>{
  let newappointmentuserRegister = new appointmentuserRegister ({
      userid: req.body.userid,
      doctorid: req.body.doctorid,
      appointmentdate: req.body.appointmentdate,
      systemappointmentdate: req.body.systemappointmentdate,
      appointmenttime: req.body.appointmenttime,
      systemappointmenttime: req.body.systemappointmenttime,
      consultmethod: req.body.consultmethod,
      paytransid: req.body.paytransid,
  });
   console.log(newappointmentuserRegister.appointmenttime);
   console.log(newappointmentuserRegister.doctorid);
   //compose an email
 
  
  appointmentuserRegister.addappointmentuserRegister(newappointmentuserRegister, (err, appointmentuser)=>{
       if(err){
           res.json({success: false, msg:'Failed to register user appointment'});
       } else {
           res.json({success: true, msg:'User Appointment Registered'});
       }
  });
});

//Register Description
router.post('/descriptionregister', (req, res, next)=>{
  let newdescriptiondoctorRegister = new descriptiondoctorRegister ({
      userid: req.body.userid,
      doctorid: req.body.doctorid,
      doctordescription: req.body.doctordescription,
      dateofdescription: req.body.dateofdescription,
      timeofdescription: req.body.timeofdescription
      
  });
  
  descriptiondoctorRegister.adddescriptiondoctorRegister(newdescriptiondoctorRegister, (err, description)=>{
       if(err){
           res.json({success: false, msg:'Failed to add description'});
       } else {
           res.json({success: true, msg:'Description added'});
       }
  });
});

//Register Feedback
router.post('/feedbackregister', (req, res, next)=>{
  let newfeedbackuserRegister = new feedbackuserRegister ({
      userid: req.body.userid,
      doctorid: req.body.doctorid,
      userfeedback: req.body.userfeedback,
      dateoffeedback: req.body.dateoffeedback,
      timeoffeedback: req.body.timeoffeedback,
      currentRate: req.body.currentRate
      
  });
  
  feedbackuserRegister.addfeedbackuserRegister(newfeedbackuserRegister, (err, feedback)=>{
       if(err){
           res.json({success: false, msg:'Failed to add feedback'});
       } else {
           res.json({success: true, msg:'Feedback added'});
       }
  });
});


//Admin Register
router.post('/adminregister', (req, res, next)=>{
  let newadminRegister = new adminRegister ({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      dateofbirth: req.body.dateofbirth,
      gender: req.body.gender,
      mobileno: req.body.mobileno,
      altermobileno: req.body.altermobileno,
      country: req.body.country,
      state: req.body.state,
      address1: req.body.address1,
      address2: req.body.address2,
      profileimg: req.body.profileimg,
      //generate secret token
      secretToken: randomstring.generate(),
      //let ount as inactive
      active: false
  });
   console.log(newadminRegister.secretToken);
   //compose an email
 
  
  adminRegister.addadminRegister(newadminRegister, (err, admin)=>{
       if(err){
           res.json({success: false, msg:'Failed to register admin'});
       } else {
        const html = 'Hi there, <br/>Thank you for registering! <br/><br/> Please verify your email by typing the following token: <br/> Token:<b>'+newadminRegister.secretToken+'</b><br/>On the following page: <a href="http://localhost:3000/admin/adminverify">http://localhost:3000/admin/adminverify</a><br/><br/>Have a pleasant day!';
        
        //send the email
        mailer.sendEmail('admin@consultonline.com', newadminRegister.email , 'Please verify your email', html);
           res.json({success: true, msg:'Admin Registered'});
       }
  });
});

//Doctor Register
router.post('/doctorregister', (req, res, next)=>{
  let newdoctorRegister = new doctorRegister ({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      dateofbirth: req.body.dateofbirth,
      gender: req.body.gender,
      mobileno: req.body.mobileno,
      altermobileno: req.body.altermobileno,
      country: req.body.country,
      state: req.body.state,
      address1: req.body.address1,
      address2: req.body.address2,
      profileimg: req.body.profileimg,
      speciality: req.body.speciality,
      active: true,
      
  });

   //compose an email
 
  
  doctorRegister.adddoctorRegister(newdoctorRegister, (err, doctor)=>{
       if(err){
           res.json({success: false, msg:'Failed to add doctor details'});
       } else {
        const html = 'Hi there, <br/>Thank you for registering! <br/><br/><br/><br/>Create your password <a href="http://localhost:3000/doctor/doctorresetpassword/'+doctor._id+'">here</a><br/><br/>Please use the following like to login: <br/> <a href="http://localhost:3000/doctor/doctorlogin">http://localhost:3000/doctor/doctorlogin</a> <br/> <br/>  <br/>Have a pleasant day!';
        
        //send the email
        mailer.sendEmail('admin@consultonline.com', newdoctorRegister.email , 'Congrats!You can login now', html);
           res.json({success: true, msg:'Doctor Details Registered'});
       }
  });
});

//Consult Time Register
router.post('/consulttimeregister', (req, res, next)=>{
  let newconsulttimeRegister = new consulttimeRegister ({
       _id: req.body._id,
       mondayslots0800am: req.body.mondayslots0800am,
       mondayslots0830am: req.body.mondayslots0830am,
       mondayslots0900am: req.body.mondayslots0900am,
       mondayslots0930am: req.body.mondayslots0930am,
       mondayslots1000am: req.body.mondayslots1000am,
       mondayslots1030am: req.body.mondayslots1030am,
       mondayslots1100am: req.body.mondayslots1100am,
       mondayslots1130am: req.body.mondayslots1130am,
       mondayslots1200pm: req.body.mondayslots1200pm,
       mondayslots1230pm: req.body.mondayslots1230pm,
       mondayslots0100pm:  req.body.mondayslots0100pm,
       mondayslots0130pm: req.body.mondayslots0130pm,
       mondayslots0200pm: req.body.mondayslots0200pm,
       mondayslots0230pm: req.body.mondayslots0230pm,
       mondayslots0300pm: req.body.mondayslots0300pm,
       mondayslots0330pm: req.body.mondayslots0330pm,
       mondayslots0400pm: req.body.mondayslots0400pm,
       mondayslots0430pm: req.body.mondayslots0430pm,
       mondayslots0500pm: req.body.mondayslots0500pm,
       tuesdayslots0800am: req.body.tuesdayslots0800am,
       tuesdayslots0830am: req.body.tuesdayslots0830am,
       tuesdayslots0900am: req.body.tuesdayslots0900am,
       tuesdayslots0930am: req.body.tuesdayslots0930am,
       tuesdayslots1000am: req.body.tuesdayslots1000am,
       tuesdayslots1030am: req.body.tuesdayslots1030am,
       tuesdayslots1100am: req.body.tuesdayslots1100am,
       tuesdayslots1130am: req.body.tuesdayslots1130am,
       tuesdayslots1200pm: req.body.tuesdayslots1200pm,
       tuesdayslots1230pm: req.body.tuesdayslots1230pm,
       tuesdayslots0100pm:  req.body.tuesdayslots0100pm,
       tuesdayslots0130pm: req.body.tuesdayslots0130pm,
       tuesdayslots0200pm: req.body.tuesdayslots0200pm,
       tuesdayslots0230pm: req.body.tuesdayslots0230pm,
       tuesdayslots0300pm: req.body.tuesdayslots0300pm,
       tuesdayslots0330pm: req.body.tuesdayslots0330pm,
       tuesdayslots0400pm: req.body.tuesdayslots0400pm,
       tuesdayslots0430pm: req.body.tuesdayslots0430pm,
       tuesdayslots0500pm: req.body.tuesdayslots0500pm,
       wednesdayslots0800am: req.body.wednesdayslots0800am,
       wednesdayslots0830am: req.body.wednesdayslots0830am,
       wednesdayslots0900am: req.body.wednesdayslots0900am,
       wednesdayslots0930am: req.body.wednesdayslots0930am,
       wednesdayslots1000am: req.body.wednesdayslots1000am,
       wednesdayslots1030am: req.body.wednesdayslots1030am,
       wednesdayslots1100am: req.body.wednesdayslots1100am,
       wednesdayslots1130am: req.body.wednesdayslots1130am,
       wednesdayslots1200pm: req.body.wednesdayslots1200pm,
       wednesdayslots1230pm: req.body.wednesdayslots1230pm,
       wednesdayslots0100pm:  req.body.wednesdayslots0100pm,
       wednesdayslots0130pm: req.body.wednesdayslots0130pm,
       wednesdayslots0200pm: req.body.wednesdayslots0200pm,
       wednesdayslots0230pm: req.body.wednesdayslots0230pm,
       wednesdayslots0300pm: req.body.wednesdayslots0300pm,
       wednesdayslots0330pm: req.body.wednesdayslots0330pm,
       wednesdayslots0400pm: req.body.wednesdayslots0400pm,
       wednesdayslots0430pm: req.body.wednesdayslots0430pm,
       wednesdayslots0500pm: req.body.wednesdayslots0500pm,
       thursdayslots0800am: req.body.thursdayslots0800am,
       thursdayslots0830am: req.body.thursdayslots0830am,
       thursdayslots0900am: req.body.thursdayslots0900am,
       thursdayslots0930am: req.body.thursdayslots0930am,
       thursdayslots1000am: req.body.thursdayslots1000am,
       thursdayslots1030am: req.body.thursdayslots1030am,
       thursdayslots1100am: req.body.thursdayslots1100am,
       thursdayslots1130am: req.body.thursdayslots1130am,
       thursdayslots1200pm: req.body.thursdayslots1200pm,
       thursdayslots1230pm: req.body.thursdayslots1230pm,
       thursdayslots0100pm:  req.body.thursdayslots0100pm,
       thursdayslots0130pm: req.body.thursdayslots0130pm,
       thursdayslots0200pm: req.body.thursdayslots0200pm,
       thursdayslots0230pm: req.body.thursdayslots0230pm,
       thursdayslots0300pm: req.body.thursdayslots0300pm,
       thursdayslots0330pm: req.body.thursdayslots0330pm,
       thursdayslots0400pm: req.body.thursdayslots0400pm,
       thursdayslots0430pm: req.body.thursdayslots0430pm,
       thursdayslots0500pm: req.body.thursdayslots0500pm,
       fridayslots0800am: req.body.fridayslots0800am,
       fridayslots0830am: req.body.fridayslots0830am,
       fridayslots0900am: req.body.fridayslots0900am,
       fridayslots0930am: req.body.fridayslots0930am,
       fridayslots1000am: req.body.fridayslots1000am,
       fridayslots1030am: req.body.fridayslots1030am,
       fridayslots1100am: req.body.fridayslots1100am,
       fridayslots1130am: req.body.fridayslots1130am,
       fridayslots1200pm: req.body.fridayslots1200pm,
       fridayslots1230pm: req.body.fridayslots1230pm,
       fridayslots0100pm:  req.body.fridayslots0100pm,
       fridayslots0130pm: req.body.fridayslots0130pm,
       fridayslots0200pm: req.body.fridayslots0200pm,
       fridayslots0230pm: req.body.fridayslots0230pm,
       fridayslots0300pm: req.body.fridayslots0300pm,
       fridayslots0330pm: req.body.fridayslots0330pm,
       fridayslots0400pm: req.body.fridayslots0400pm,
       fridayslots0430pm: req.body.fridayslots0430pm,
       fridayslots0500pm: req.body.fridayslots0500pm,
       saturdayslots0800am: req.body.saturdayslots0800am,
       saturdayslots0830am: req.body.saturdayslots0830am,
       saturdayslots0900am: req.body.saturdayslots0900am,
       saturdayslots0930am: req.body.saturdayslots0930am,
       saturdayslots1000am: req.body.saturdayslots1000am,
       saturdayslots1030am: req.body.saturdayslots1030am,
       saturdayslots1100am: req.body.saturdayslots1100am,
       saturdayslots1130am: req.body.saturdayslots1130am,
       saturdayslots1200pm: req.body.saturdayslots1200pm,
       saturdayslots1230pm: req.body.saturdayslots1230pm,
       saturdayslots0100pm:  req.body.saturdayslots0100pm,
       saturdayslots0130pm: req.body.saturdayslots0130pm,
       saturdayslots0200pm: req.body.saturdayslots0200pm,
       saturdayslots0230pm: req.body.saturdayslots0230pm,
       saturdayslots0300pm: req.body.saturdayslots0300pm,
       saturdayslots0330pm: req.body.saturdayslots0330pm,
       saturdayslots0400pm: req.body.saturdayslots0400pm,
       saturdayslots0430pm: req.body.saturdayslots0430pm,
       saturdayslots0500pm: req.body.saturdayslots0500pm,
       sundayslots0800am: req.body.sundayslots0800am,
       sundayslots0830am: req.body.sundayslots0830am,
       sundayslots0900am: req.body.sundayslots0900am,
       sundayslots0930am: req.body.sundayslots0930am,
       sundayslots1000am: req.body.sundayslots1000am,
       sundayslots1030am: req.body.sundayslots1030am,
       sundayslots1100am: req.body.sundayslots1100am,
       sundayslots1130am: req.body.sundayslots1130am,
       sundayslots1200pm: req.body.sundayslots1200pm,
       sundayslots1230pm: req.body.sundayslots1230pm,
       sundayslots0100pm:  req.body.sundayslots0100pm,
       sundayslots0130pm: req.body.sundayslots0130pm,
       sundayslots0200pm: req.body.sundayslots0200pm,
       sundayslots0230pm: req.body.sundayslots0230pm,
       sundayslots0300pm: req.body.sundayslots0300pm,
       sundayslots0330pm: req.body.sundayslots0330pm,
       sundayslots0400pm: req.body.sundayslots0400pm,
       sundayslots0430pm: req.body.sundayslots0430pm,
       sundayslots0500pm: req.body.sundayslots0500pm,

       //monday: req.body.monday,
      //monday: req.body.monday,
      //tuesday: req.body.tuesday,
      //wednesday: req.body.wednesday,
      //thursday: req.body.thursday,
      //friday: req.body.friday,
      //saturday: req.body.saturday,
      //sunday: req.body.sunday
  });

   //compose an email
 
  
  consulttimeRegister.addconsulttimeRegister(newconsulttimeRegister, (err, consulttime)=>{
       
    if(err){
           console.log(newconsulttimeRegister);
           console.log('error');
           res.json({success: false, msg:'Failed to add consult time details'});
       } else {
           console.log(newconsulttimeRegister);
           console.log('success');
           res.json({success: true, msg:'Consult Time Details Registered'});
       }
  });
});

//Verfy Email
router.post('/verify', (req, res, next)=>{

         const secretToken = req.body.secretToken;
         console.log(secretToken);
         
           userRegister.verifyUserRegisterEmail(secretToken, (err, user) =>{
          if(err) throw err;
          if(!user){
              return res.json({success: false, msg:'Email is not verified'});
          } else {
           
            res.json({
              success: true,
              user: {
                  secretToken: user.secretToken="",
                  active: user.active=true
          }

          });
           user.save();
          }
   });

 

});

//Verfy Admin Email
router.post('/adminverify', (req, res, next)=>{
  
           const secretToken = req.body.secretToken;
           console.log(secretToken);
           
             adminRegister.verifyAdminRegisterEmail(secretToken, (err, admin) =>{
            if(err) throw err;
            if(!admin){
                return res.json({success: false, msg:'Email is not verified'});
            } else {
             
              res.json({
                success: true,
                admin: {
                    secretToken: admin.secretToken="",
                    active: admin.active=true
            }
  
            });
             admin.save();
            }
     });
  
   
  
  });

//Verfy Email and retrieve reset password
router.post('/retrieve', (req, res, next)=>{

           const secretEmail = req.body.secretEmail;
           
             userRegister.retrieveUserRegister(secretEmail,(err, user) =>{
              
            if(err) throw err;
            if(!user){
                return res.json({success: false, msg:'You have not registered with this email'});
            } else {

              const html = 'Hi there, <br/>Thank you for contacting us! <br/><br/>Reset your password <a href="http://localhost:3000/user/resetpassword/'+user._id+'">here</a><br/><br/>Have a pleasant day!';
              
              //send the email
              mailer.sendEmail('admin@consultonline.com', secretEmail , 'Reset Password - Online Consult', html);
              res.json({
                success: true,
                user: {
                    secretEmail: user.secretEmail,
            }
           
            });
            }
     });
  
  });

  //Verfy Email and retrieve reset password
router.post('/adminretrieve', (req, res, next)=>{
  
             const secretEmail = req.body.secretEmail;
             
               adminRegister.retrieveAdminRegister(secretEmail,(err, admin) =>{
                
              if(err) throw err;
              if(!admin){
                  return res.json({success: false, msg:'You have not registered with this email'});
              } else {
  
                const html = 'Hi there, <br/>Thank you for contacting us! <br/><br/>Reset your password <a href="http://localhost:3000/admin/adminresetpassword/'+admin._id+'">here</a><br/><br/>Have a pleasant day!';
                
                //send the email
                mailer.sendEmail('admin@consultonline.com', secretEmail , 'Reset Password - Online Consult', html);
                res.json({
                  success: true,
                  admin: {
                      secretEmail: admin.secretEmail,
              }
             
              });
              }
       });
    
    });
  

 //Verfy Email and retrieve reset password
 router.post('/doctorretrieve', (req, res, next)=>{
  
             const secretEmail = req.body.secretEmail;
             
               doctorRegister.retrieveDoctorRegister(secretEmail,(err, doctor) =>{
                
              if(err) throw err;
              if(!doctor){
                  return res.json({success: false, msg:'You have not registered with this email'});
              } else {
  
                const html = 'Hi there, <br/>Thank you for contacting us! <br/><br/>Reset your password <a href="http://localhost:3000/doctor/doctorresetpassword/'+doctor._id+'">here</a><br/><br/>Have a pleasant day!';
                
                //send the email
                mailer.sendEmail('admin@consultonline.com', secretEmail , 'Reset Password - Online Consult', html);
                res.json({
                  success: true,
                  doctor: {
                      secretEmail: doctor.secretEmail,
              }
             
              });
              }
       });
    
    });
  

//Update Customer PID Register
router.put('/customerpidregister/:_id', (req, res) => {
    
  let newuserRegister = new userRegister ({
    pid: req.body.pid
});
 
    //var profileimg = req.file;
    var _id = req.params._id;
    //var newuserRegister = req.body;
    userRegister.updatecustomerpidRegister(_id, newuserRegister, {}, function(err, user){
         if(err){
           throw err;
         }
         res.json(user);
   });
  
  });

  //Update Customer Name Register
router.put('/customernameregister/:_id', (req, res) => {
  
let newuserRegister = new userRegister ({
  name: req.body.name
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  userRegister.updatecustomernameRegister(_id, newuserRegister, {}, function(err, user){
       if(err){
         throw err;
       }
       res.json(user);
 });

});

  //Update Doctor Name Register
  router.put('/doctornameregister/:_id', (req, res) => {
    
  let newdoctorRegister = new doctorRegister ({
    name: req.body.name
  });
  
    //var profileimg = req.file;
    var _id = req.params._id;
    //var newuserRegister = req.body;
    doctorRegister.updatedoctornameRegister(_id, newdoctorRegister, {}, function(err, doctor){
         if(err){
           throw err;
         }
         res.json(doctor);
   });
  
  });

 //Update Customer Username Register
 router.put('/customerusernameregister/:_id', (req, res) => {
  
let newuserRegister = new userRegister ({
  username: req.body.username
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  userRegister.updatecustomerusernameRegister(_id, newuserRegister, {}, function(err, user){
       if(err){
         throw err;
       }
       res.json(user);
 });

});

 //Update Doctor Username Register
 router.put('/doctorusernameregister/:_id', (req, res) => {
  
let newdoctorRegister = new doctorRegister ({
  username: req.body.username
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  doctorRegister.updatedoctorusernameRegister(_id, newdoctorRegister, {}, function(err, doctor){
       if(err){
         throw err;
       }
       res.json(doctor);
 });

});


 //Update Customer Gender Register
 router.put('/customergenderregister/:_id', (req, res) => {
  
let newuserRegister = new userRegister ({
  gender: req.body.gender
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  userRegister.updatecustomergenderRegister(_id, newuserRegister, {}, function(err, user){
       if(err){
         throw err;
       }
       res.json(user);
 });

});

//Update Doctor Gender Register
router.put('/doctorgenderregister/:_id', (req, res) => {
  
let newdoctorRegister = new doctorRegister ({
  gender: req.body.gender
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  doctorRegister.updatedoctorgenderRegister(_id, newdoctorRegister, {}, function(err, doctor){
       if(err){
         throw err;
       }
       res.json(doctor);
 });

});

//Update Doctor Gender Register
router.put('/doctorspecialityregister/:_id', (req, res) => {
  
let newdoctorRegister = new doctorRegister ({
  speciality: req.body.speciality
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  doctorRegister.updatedoctorspecialityRegister(_id, newdoctorRegister, {}, function(err, doctor){
       if(err){
         throw err;
       }
       res.json(doctor);
 });

});

//Update Customer Active Register
router.put('/customeractiveregister/:_id', (req, res) => {
  
let newuserRegister = new userRegister ({
  active: req.body.active
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  userRegister.updatecustomeractiveRegister(_id, newuserRegister, {}, function(err, user){
       if(err){
         throw err;
       }
       res.json(user);
 });

});

//Update Doctor Active Register
router.put('/doctoractiveregister/:_id', (req, res) => {
  
let newdoctorRegister = new doctorRegister ({
  active: req.body.active
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  doctorRegister.updatedoctoractiveRegister(_id, newdoctorRegister, {}, function(err, doctor){
       if(err){
         throw err;
       }
       res.json(doctor);
 });

});

//Update Customer Address Register
router.put('/customeraddressregister/:_id', (req, res) => {
  
let newuserRegister = new userRegister ({
  address1: req.body.address1,
  address2: req.body.address2,
  state: req.body.state,
  country: req.body.country
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  userRegister.updatecustomeraddressRegister(_id, newuserRegister, {}, function(err, user){
       if(err){
         throw err;
       }
       res.json(user);
 });

});

//Update Doctor Address Register
router.put('/doctoraddressregister/:_id', (req, res) => {
  
let newdoctorRegister = new doctorRegister ({
  address1: req.body.address1,
  address2: req.body.address2,
  state: req.body.state,
  country: req.body.country
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  doctorRegister.updatedoctoraddressRegister(_id, newdoctorRegister, {}, function(err, doctor){
       if(err){
         throw err;
       }
       res.json(doctor);
 });

});


//Update Customer Dateofbirth Register
router.put('/customerdateofbirthregister/:_id', (req, res) => {
  
let newuserRegister = new userRegister ({
  dateofbirth: req.body.dateofbirth
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  userRegister.updatecustomerdateofbirthRegister(_id, newuserRegister, {}, function(err, user){
       if(err){
         throw err;
       }
       res.json(user);
 });

});

//Update Doctor Dateofbirth Register
router.put('/doctordateofbirthregister/:_id', (req, res) => {
  
let newdoctorRegister = new doctorRegister ({
  dateofbirth: req.body.dateofbirth
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  doctorRegister.updatedoctordateofbirthRegister(_id, newdoctorRegister, {}, function(err, doctor){
       if(err){
         throw err;
       }
       res.json(doctor);
 });

});

//Update Customer Profile Image Register
router.put('/customerprofileimgregister/:_id', (req, res) => {
  
let newuserRegister = new userRegister ({
  profileimg: req.body.profileimg
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  userRegister.updatecustomerprofileimgRegister(_id, newuserRegister, {}, function(err, user){
       if(err){
         throw err;
       }
       res.json(user);
 });

});

//Update Doctor Profile Image Register
router.put('/doctorprofileimgregister/:_id', (req, res) => {
  
let newdoctorRegister = new doctorRegister ({
  profileimg: req.body.profileimg
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  doctorRegister.updatedoctorprofileimgRegister(_id, newdoctorRegister, {}, function(err, doctor){
       if(err){
         throw err;
       }
       res.json(doctor);
 });

});



 //Update Customer Email Register
 router.put('/customeremailregister/:_id', (req, res) => {
  
let newuserRegister = new userRegister ({
  email: req.body.email
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  userRegister.updatecustomeremailRegister(_id, newuserRegister, {}, function(err, user){
       if(err){
         throw err;
       }
       res.json(user);
 });

});

 //Update Doctor Email Register
 router.put('/doctoremailregister/:_id', (req, res) => {
  
let newdoctorRegister = new doctorRegister ({
  email: req.body.email
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  doctorRegister.updatedoctoremailRegister(_id, newdoctorRegister, {}, function(err, doctor){
       if(err){
         throw err;
       }
       res.json(doctor);
 });

});

 //Update Customer Mobile Number Register
 router.put('/customermobilenoregister/:_id', (req, res) => {
  
let newuserRegister = new userRegister ({
  mobileno: req.body.mobileno
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  userRegister.updatecustomermobilenoRegister(_id, newuserRegister, {}, function(err, user){
       if(err){
         throw err;
       }
       res.json(user);
 });

});

//Update Doctor Mobile Number Register
router.put('/doctormobilenoregister/:_id', (req, res) => {
  
let newdoctorRegister = new doctorRegister ({
  mobileno: req.body.mobileno
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  doctorRegister.updatedoctormobilenoRegister(_id, newdoctorRegister, {}, function(err, doctor){
       if(err){
         throw err;
       }
       res.json(doctor);
 });

});

//Update Customer Mobile Number Register
router.put('/customeraltermobilenoregister/:_id', (req, res) => {
  
let newuserRegister = new userRegister ({
  altermobileno: req.body.altermobileno
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  userRegister.updatecustomeraltermobilenoRegister(_id, newuserRegister, {}, function(err, user){
       if(err){
         throw err;
       }
       res.json(user);
 });

});


//Update Doctor Mobile Number Register
router.put('/doctoraltermobilenoregister/:_id', (req, res) => {
  
let newdoctorRegister = new doctorRegister ({
  altermobileno: req.body.altermobileno
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  doctorRegister.updatedoctoraltermobilenoRegister(_id, newdoctorRegister, {}, function(err, doctor){
       if(err){
         throw err;
       }
       res.json(doctor);
 });

});

  //Update Customer Register
router.put('/customerregister/:_id', (req, res) => {
  
let newuserRegister = new userRegister ({
  pid: req.body.pid,
  name: req.body.name
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  userRegister.updatecustomerRegister(_id, newuserRegister, {}, function(err, user){
       if(err){
         throw err;
       }
       res.json(user);
 });

});

  router.put('/register/:_id', (req, res) => {
    
  let newuserRegister = new userRegister ({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    dateofbirth: req.body.dateofbirth, 
    gender: req.body.gender,
    mobileno: req.body.mobileno,
    altermobileno: req.body.altermobileno,
    country: req.body.country,
    state: req.body.state,
    address1: req.body.address1,
    address2: req.body.address2,
    profileimg: req.body.profileimg,
    pid: req.body.pid
});
 
    //var profileimg = req.file;
    var _id = req.params._id;
   console.log(req.body.profileimg);
    //var newuserRegister = req.body;
    userRegister.updateuserRegister(_id, newuserRegister, {}, function(err, user){
         if(err){
           throw err;
         }
         console.log(req.body.profileimg);
         res.json(user);
   });
  
  });

  //Update Admin Register
router.put('/adminregister/:_id', (req, res) => {
  
let newadminRegister = new adminRegister ({
  name: req.body.name,
  username: req.body.username,
  email: req.body.email,
  password: req.body.password,
  dateofbirth: req.body.dateofbirth, 
  gender: req.body.gender,
  mobileno: req.body.mobileno,
  altermobileno: req.body.altermobileno,
  country: req.body.country,
  state: req.body.state,
  address1: req.body.address1,
  address2: req.body.address2,
  profileimg: req.body.profileimg
});

  //var profileimg = req.file;
  var _id = req.params._id;
// console.log(req.body.profileimg);
  //var newuserRegister = req.body;
  adminRegister.updateadminRegister(_id, newadminRegister, {}, function(err, admin){
       if(err){
         throw err;
       }
       console.log(admin);
      // console.log(req.body.profileimg);
       res.json(admin);
 });

});

 //Update Admin Register
 router.put('/doctorregister/:_id', (req, res) => {
  
let newdoctorRegister = new doctorRegister ({
  name: req.body.name,
  username: req.body.username,
  email: req.body.email,
  password: req.body.password,
  dateofbirth: req.body.dateofbirth, 
  gender: req.body.gender,
  mobileno: req.body.mobileno,
  altermobileno: req.body.altermobileno,
  country: req.body.country,
  state: req.body.state,
  address1: req.body.address1,
  address2: req.body.address2,
  profileimg: req.body.profileimg,
  speciality: req.body.speciality
});

  //var profileimg = req.file;
  var _id = req.params._id;
// console.log(req.body.profileimg);
  //var newuserRegister = req.body;
  doctorRegister.updatedoctorRegister(_id, newdoctorRegister, {}, function(err, doctor){
       if(err){
         throw err;
       }
       console.log(doctor);
      // console.log(req.body.profileimg);
       res.json(doctor);
 });

});

 //Update Doctor Consulttime Register
 router.put('/consulttimeregister/:_id', (req, res) => {
  
let newconsulttimeRegister = new consulttimeRegister ({
    mondayslots0800am: req.body.mondayslots0800am,
    mondayslots0830am: req.body.mondayslots0830am,
    mondayslots0900am: req.body.mondayslots0900am,
    mondayslots0930am: req.body.mondayslots0930am,
    mondayslots1000am: req.body.mondayslots1000am,
    mondayslots1030am: req.body.mondayslots1030am,
    mondayslots1100am: req.body.mondayslots1100am,
    mondayslots1130am: req.body.mondayslots1130am,
    mondayslots1200pm: req.body.mondayslots1200pm,
    mondayslots1230pm: req.body.mondayslots1230pm,
    mondayslots0100pm:  req.body.mondayslots0100pm,
    mondayslots0130pm: req.body.mondayslots0130pm,
    mondayslots0200pm: req.body.mondayslots0200pm,
    mondayslots0230pm: req.body.mondayslots0230pm,
    mondayslots0300pm: req.body.mondayslots0300pm,
    mondayslots0330pm: req.body.mondayslots0330pm,
    mondayslots0400pm: req.body.mondayslots0400pm,
    mondayslots0430pm: req.body.mondayslots0430pm,
    mondayslots0500pm: req.body.mondayslots0500pm,
    tuesdayslots0800am: req.body.tuesdayslots0800am,
    tuesdayslots0830am: req.body.tuesdayslots0830am,
    tuesdayslots0900am: req.body.tuesdayslots0900am,
    tuesdayslots0930am: req.body.tuesdayslots0930am,
    tuesdayslots1000am: req.body.tuesdayslots1000am,
    tuesdayslots1030am: req.body.tuesdayslots1030am,
    tuesdayslots1100am: req.body.tuesdayslots1100am,
    tuesdayslots1130am: req.body.tuesdayslots1130am,
    tuesdayslots1200pm: req.body.tuesdayslots1200pm,
    tuesdayslots1230pm: req.body.tuesdayslots1230pm,
    tuesdayslots0100pm:  req.body.tuesdayslots0100pm,
    tuesdayslots0130pm: req.body.tuesdayslots0130pm,
    tuesdayslots0200pm: req.body.tuesdayslots0200pm,
    tuesdayslots0230pm: req.body.tuesdayslots0230pm,
    tuesdayslots0300pm: req.body.tuesdayslots0300pm,
    tuesdayslots0330pm: req.body.tuesdayslots0330pm,
    tuesdayslots0400pm: req.body.tuesdayslots0400pm,
    tuesdayslots0430pm: req.body.tuesdayslots0430pm,
    tuesdayslots0500pm: req.body.tuesdayslots0500pm,
    wednesdayslots0800am: req.body.wednesdayslots0800am,
    wednesdayslots0830am: req.body.wednesdayslots0830am,
    wednesdayslots0900am: req.body.wednesdayslots0900am,
    wednesdayslots0930am: req.body.wednesdayslots0930am,
    wednesdayslots1000am: req.body.wednesdayslots1000am,
    wednesdayslots1030am: req.body.wednesdayslots1030am,
    wednesdayslots1100am: req.body.wednesdayslots1100am,
    wednesdayslots1130am: req.body.wednesdayslots1130am,
    wednesdayslots1200pm: req.body.wednesdayslots1200pm,
    wednesdayslots1230pm: req.body.wednesdayslots1230pm,
    wednesdayslots0100pm:  req.body.wednesdayslots0100pm,
    wednesdayslots0130pm: req.body.wednesdayslots0130pm,
    wednesdayslots0200pm: req.body.wednesdayslots0200pm,
    wednesdayslots0230pm: req.body.wednesdayslots0230pm,
    wednesdayslots0300pm: req.body.wednesdayslots0300pm,
    wednesdayslots0330pm: req.body.wednesdayslots0330pm,
    wednesdayslots0400pm: req.body.wednesdayslots0400pm,
    wednesdayslots0430pm: req.body.wednesdayslots0430pm,
    wednesdayslots0500pm: req.body.wednesdayslots0500pm,
    thursdayslots0800am: req.body.thursdayslots0800am,
    thursdayslots0830am: req.body.thursdayslots0830am,
    thursdayslots0900am: req.body.thursdayslots0900am,
    thursdayslots0930am: req.body.thursdayslots0930am,
    thursdayslots1000am: req.body.thursdayslots1000am,
    thursdayslots1030am: req.body.thursdayslots1030am,
    thursdayslots1100am: req.body.thursdayslots1100am,
    thursdayslots1130am: req.body.thursdayslots1130am,
    thursdayslots1200pm: req.body.thursdayslots1200pm,
    thursdayslots1230pm: req.body.thursdayslots1230pm,
    thursdayslots0100pm:  req.body.thursdayslots0100pm,
    thursdayslots0130pm: req.body.thursdayslots0130pm,
    thursdayslots0200pm: req.body.thursdayslots0200pm,
    thursdayslots0230pm: req.body.thursdayslots0230pm,
    thursdayslots0300pm: req.body.thursdayslots0300pm,
    thursdayslots0330pm: req.body.thursdayslots0330pm,
    thursdayslots0400pm: req.body.thursdayslots0400pm,
    thursdayslots0430pm: req.body.thursdayslots0430pm,
    thursdayslots0500pm: req.body.thursdayslots0500pm,
    fridayslots0800am: req.body.fridayslots0800am,
    fridayslots0830am: req.body.fridayslots0830am,
    fridayslots0900am: req.body.fridayslots0900am,
    fridayslots0930am: req.body.fridayslots0930am,
    fridayslots1000am: req.body.fridayslots1000am,
    fridayslots1030am: req.body.fridayslots1030am,
    fridayslots1100am: req.body.fridayslots1100am,
    fridayslots1130am: req.body.fridayslots1130am,
    fridayslots1200pm: req.body.fridayslots1200pm,
    fridayslots1230pm: req.body.fridayslots1230pm,
    fridayslots0100pm:  req.body.fridayslots0100pm,
    fridayslots0130pm: req.body.fridayslots0130pm,
    fridayslots0200pm: req.body.fridayslots0200pm,
    fridayslots0230pm: req.body.fridayslots0230pm,
    fridayslots0300pm: req.body.fridayslots0300pm,
    fridayslots0330pm: req.body.fridayslots0330pm,
    fridayslots0400pm: req.body.fridayslots0400pm,
    fridayslots0430pm: req.body.fridayslots0430pm,
    fridayslots0500pm: req.body.fridayslots0500pm,
    saturdayslots0800am: req.body.saturdayslots0800am,
    saturdayslots0830am: req.body.saturdayslots0830am,
    saturdayslots0900am: req.body.saturdayslots0900am,
    saturdayslots0930am: req.body.saturdayslots0930am,
    saturdayslots1000am: req.body.saturdayslots1000am,
    saturdayslots1030am: req.body.saturdayslots1030am,
    saturdayslots1100am: req.body.saturdayslots1100am,
    saturdayslots1130am: req.body.saturdayslots1130am,
    saturdayslots1200pm: req.body.saturdayslots1200pm,
    saturdayslots1230pm: req.body.saturdayslots1230pm,
    saturdayslots0100pm:  req.body.saturdayslots0100pm,
    saturdayslots0130pm: req.body.saturdayslots0130pm,
    saturdayslots0200pm: req.body.saturdayslots0200pm,
    saturdayslots0230pm: req.body.saturdayslots0230pm,
    saturdayslots0300pm: req.body.saturdayslots0300pm,
    saturdayslots0330pm: req.body.saturdayslots0330pm,
    saturdayslots0400pm: req.body.saturdayslots0400pm,
    saturdayslots0430pm: req.body.saturdayslots0430pm,
    saturdayslots0500pm: req.body.saturdayslots0500pm,
    sundayslots0800am: req.body.sundayslots0800am,
    sundayslots0830am: req.body.sundayslots0830am,
    sundayslots0900am: req.body.sundayslots0900am,
    sundayslots0930am: req.body.sundayslots0930am,
    sundayslots1000am: req.body.sundayslots1000am,
    sundayslots1030am: req.body.sundayslots1030am,
    sundayslots1100am: req.body.sundayslots1100am,
    sundayslots1130am: req.body.sundayslots1130am,
    sundayslots1200pm: req.body.sundayslots1200pm,
    sundayslots1230pm: req.body.sundayslots1230pm,
    sundayslots0100pm:  req.body.sundayslots0100pm,
    sundayslots0130pm: req.body.sundayslots0130pm,
    sundayslots0200pm: req.body.sundayslots0200pm,
    sundayslots0230pm: req.body.sundayslots0230pm,
    sundayslots0300pm: req.body.sundayslots0300pm,
    sundayslots0330pm: req.body.sundayslots0330pm,
    sundayslots0400pm: req.body.sundayslots0400pm,
    sundayslots0430pm: req.body.sundayslots0430pm,
    sundayslots0500pm: req.body.sundayslots0500pm,
});

  //var profileimg = req.file;
  var _id = req.params._id;
// console.log(req.body.profileimg);
  //var newuserRegister = req.body;
  consulttimeRegister.updateconsulttimeRegister(_id, newconsulttimeRegister, {}, function(err, consulttime){
       if(err){
         throw err;
       }
       console.log(consulttime);
      // console.log(req.body.profileimg);
       res.json(consulttime);
 });

});

 //Save doctor profile image
 router.put('/savedoctor/:_id', (req, res) => {
  
let newdoctorRegister = new doctorRegister ({
  profileimg: req.body.profileimg
});

  //var profileimg = req.file;
  var _id = req.params._id;
// console.log(req.body.profileimg);
  //var newuserRegister = req.body;
  doctorRegister.savedoctorRegister(_id, newdoctorRegister, {}, function(err, doctor){
       if(err){
         throw err;
       }
       console.log(doctor);
      // console.log(req.body.profileimg);
       res.json(doctor);
 });

});

 //Save admin profile image
 router.put('/saveadmin/:_id', (req, res) => {
  
let newadminRegister = new adminRegister ({
  profileimg: req.body.profileimg
});

  //var profileimg = req.file;
  var _id = req.params._id;
// console.log(req.body.profileimg);
  //var newuserRegister = req.body;
  adminRegister.saveadminRegister(_id, newadminRegister, {}, function(err, admin){
       if(err){
         throw err;
       }
       console.log(admin);
      // console.log(req.body.profileimg);
       res.json(admin);
 });

});

//Save user profile image
router.put('/saveuser/:_id', (req, res) => {
  
let newuserRegister = new userRegister ({
  profileimg: req.body.profileimg
});

  //var profileimg = req.file;
  var _id = req.params._id;
// console.log(req.body.profileimg);
  //var newuserRegister = req.body;
  userRegister.saveuserRegister(_id, newuserRegister, {}, function(err, user){
       if(err){
         throw err;
       }
       console.log(user);
      // console.log(req.body.profileimg);
       res.json(user);
 });

});

  //Update Password
router.put('/profile/:_id', (req, res) => {
  
  let newuserRegister = new userRegister ({

    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    dateofbirth: req.body.dateofbirth,
    gender: req.body.gender,
    mobileno: req.body.mobileno,
    altermobileno: req.body.altermobileno,
    country: req.body.country,
    state: req.body.state,
    address1: req.body.address1,
    address2: req.body.address2,
    profileimg: req.body.profileimg,
    pid: req.body.pid
});

var _id = req.params._id;
//var _pass=req.body.password;
//console.log(_id);
//console.log(_pass);
    //var newuserRegister = req.body;
    userRegister.updateuserRegisterPassword(_id, newuserRegister, {}, function(err, user){
      //console.log(_id);
      //newuserRegister._id=_id;
      //newuserRegister.password=newuserRegister.password;
      if(err){
           throw err;
         }
        
         console.log(user);
         //console.log(newuserRegister);
         //user.password = newuserRegister.password;
        // console.log(user.password);
         res.json(user);
         
    });
  
  });

   //Update Admin Password
router.put('/adminprofile/:_id', (req, res) => {
  
  let newadminRegister = new adminRegister ({

    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    dateofbirth: req.body.dateofbirth,
    gender: req.body.gender,
    mobileno: req.body.mobileno,
    altermobileno: req.body.altermobileno,
    country: req.body.country,
    state: req.body.state,
    address1: req.body.address1,
    address2: req.body.address2,
    profileimg: req.body.profileimg
});

var _id = req.params._id;
//var _pass=req.body.password;
//console.log(_id);
//console.log(_pass);
    //var newuserRegister = req.body;
    adminRegister.updateadminRegisterPassword(_id, newadminRegister, {}, function(err, admin){
      //console.log(_id);
      //newuserRegister._id=_id;
      //newuserRegister.password=newuserRegister.password;
      if(err){
           throw err;
         }
        
         console.log(admin);
         //console.log(newuserRegister);
         //user.password = newuserRegister.password;
        // console.log(user.password);
         res.json(admin);
         
    });
  
  });

   //Update Doctor Password
router.put('/doctorprofile/:_id', (req, res) => {
  
  let newdoctorRegister = new doctorRegister ({

    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    dateofbirth: req.body.dateofbirth,
    gender: req.body.gender,
    mobileno: req.body.mobileno,
    altermobileno: req.body.altermobileno,
    country: req.body.country,
    state: req.body.state,
    address1: req.body.address1,
    address2: req.body.address2,
    profileimg: req.body.profileimg,
    speciality: req.body.speciality
});

var _id = req.params._id;
//var _pass=req.body.password;
//console.log(_id);
//console.log(_pass);
    //var newuserRegister = req.body;
    doctorRegister.updatedoctorRegisterPassword(_id, newdoctorRegister, {}, function(err, doctor){
      //console.log(_id);
      //newuserRegister._id=_id;
      //newuserRegister.password=newuserRegister.password;
      if(err){
           throw err;
         }
        
         console.log(doctor);
         //console.log(newuserRegister);
         //user.password = newuserRegister.password;
        // console.log(user.password);
         res.json(doctor);
         
    });
  
  });

   //Reset Password
router.put('/resetpassword/:_id', (req, res) => {
  
  let newuserRegister = new userRegister ({
    password: req.body.password,
});

var _id = req.params._id;
//var _pass=req.body.password;
//console.log(_id);
//console.log(_pass);
    //var newuserRegister = req.body;
    userRegister.resetuserRegisterPassword(_id, newuserRegister, {}, function(err, user){
      //console.log(_id);
      //newuserRegister._id=_id;
      //newuserRegister.password=newuserRegister.password;
      if(err){
           throw err;
         }
        
         console.log(user);
         //console.log(newuserRegister);
         //user.password = newuserRegister.password;
        // console.log(user.password);
         res.json(user);
         
    });
  
  });

  //Reset Password
  router.put('/adminresetpassword/:_id', (req, res) => {
    
    let newadminRegister = new adminRegister ({
      password: req.body.password,
  });
  
  var _id = req.params._id;
  //var _pass=req.body.password;
  //console.log(_id);
  //console.log(_pass);
      //var newuserRegister = req.body;
      adminRegister.resetadminRegisterPassword(_id, newadminRegister, {}, function(err, admin){
        //console.log(_id);
        //newuserRegister._id=_id;
        //newuserRegister.password=newuserRegister.password;
        if(err){
             throw err;
           }
          
           console.log(admin);
           //console.log(newuserRegister);
           //user.password = newuserRegister.password;
          // console.log(user.password);
           res.json(admin);
           
      });
    
    });
  
    //Reset Doctor Password
  router.put('/doctorresetpassword/:_id', (req, res) => {
    
    let newdoctorRegister = new doctorRegister ({
      password: req.body.password,
  });
  
  var _id = req.params._id;
  //var _pass=req.body.password;
  //console.log(_id);
  //console.log(_pass);
      //var newuserRegister = req.body;
      doctorRegister.resetdoctorRegisterPassword(_id, newdoctorRegister, {}, function(err, doctor){
        //console.log(_id);
        //newuserRegister._id=_id;
        //newuserRegister.password=newuserRegister.password;
        if(err){
             throw err;
           }
          
           console.log(doctor);
           //console.log(newuserRegister);
           //user.password = newuserRegister.password;
          // console.log(user.password);
           res.json(doctor);
           
      });
    
    });
  
//Authenticate
router.post('/authenticate', (req, res, next) =>{
    const email = req.body.email;
    const password = req.body.password;
   // const secretToken = req.body.secretToken;
   // console.log(secretToken);
    //userRegister.getuserRegisterByUsername(username, (err, user) =>{
      // if(err) throw err;
     //  if(!user){
     //      return res.json({success: false, msg:'User not found'});
     //  }

       userRegister.getuserRegisterByEmail(email, (err, user) =>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User email not found'});
        }
        
            //if the account has been verified
            if(!user.active){

              return res.json({success: false, msg:'You need to verify email first. Please check your email.'});
              
            }
      
       userRegister.comparePassword(password, user.password, (err, isMatch) =>{
          if(err) throw err;
          if(isMatch){
              const token = jwt.sign({data: user}, config.secret, {
                  expiresIn: 604800  // 1 week
              });
             // console.log('Token Value:');
              //console.log(token);
              res.json({
                  success: true,
                  token: 'JWT '+token,
                  user: {
                      id: user._id,
                      name: user.name,
                      username: user.username,
                      email: user.email,
                      password: user.password,
                      dateofbirth: user.dateofbirth,
                      gender: user.gender,
                      mobileno: user.mobileno,
                      altermobileno: user.altermobileno,
                      country: user.country,
                      state: user.state,
                      address1: user.address1,
                      address2: user.address2,
                      profileimg: user.profileimg,
                      pid: user.pid
              }
            
              });
              
              
          } else {
            return res.json({success: false, msg:'Wrong password'});
          }
      
       });
    });
});

//Admin Authenticate
router.post('/adminauthenticate', (req, res, next) =>{
  const email = req.body.email;
  const password = req.body.password;
 // const secretToken = req.body.secretToken;
 // console.log(secretToken);
  //userRegister.getuserRegisterByUsername(username, (err, user) =>{
    // if(err) throw err;
   //  if(!user){
   //      return res.json({success: false, msg:'User not found'});
   //  }

     adminRegister.getadminRegisterByEmail(email, (err, admin) =>{
      if(err) throw err;
      if(!admin){
          return res.json({success: false, msg:'Admin email not found'});
      }
      
          //if the account has been verified
          if(!admin.active){

            return res.json({success: false, msg:'You need to verify email first. Please check your email.'});
            
          }
    
     adminRegister.compareAdminPassword(password, admin.password, (err, isMatch) =>{
        if(err) throw err;
        if(isMatch){
            const token = jwt.sign({data: admin}, config.secret, {
                expiresIn: 604800  // 1 week
            });
           // console.log('Token Value:');
            //console.log(token);
            res.json({
                success: true,
                token: 'JWT '+token,
                admin: {
                    id: admin._id,
                    name: admin.name,
                    username: admin.username,
                    email: admin.email,
                    password: admin.password,
                    dateofbirth: admin.dateofbirth,
                    gender: admin.gender,
                    mobileno: admin.mobileno,
                    altermobileno: admin.altermobileno,
                    country: admin.country,
                    state: admin.state,
                    address1: admin.address1,
                    address2: admin.address2,
                    profileimg: admin.profileimg
            }
          
            });
            
            
        } else {
          return res.json({success: false, msg:'Wrong password'});
        }
    
     });
  });
});

//Doctor Authenticate
router.post('/doctorauthenticate', (req, res, next) =>{
  const email = req.body.email;
  const password = req.body.password;
 // const secretToken = req.body.secretToken;
 // console.log(secretToken);
  //userRegister.getuserRegisterByUsername(username, (err, user) =>{
    // if(err) throw err;
   //  if(!user){
   //      return res.json({success: false, msg:'User not found'});
   //  }

     doctorRegister.getdoctorRegisterByEmail(email, (err, doctor) =>{
      if(err) throw err;
      if(!doctor){
          return res.json({success: false, msg:'Doctor email not found'});
      }
      
          //if the account has been verified
          if(!doctor.active){

            return res.json({success: false, msg:'Your account is not active. Please contact admin.'});
            
          }
    
     doctorRegister.compareDoctorPassword(password, doctor.password, (err, isMatch) =>{
        if(err) throw err;
        if(isMatch){
            const token = jwt.sign({data: doctor}, config.secret, {
                expiresIn: 604800  // 1 week
            });
           // console.log('Token Value:');
            //console.log(token);
            res.json({
                success: true,
                token: 'JWT '+token,
                doctor: {
                    id: doctor._id,
                    name: doctor.name,
                    username: doctor.username,
                    email: doctor.email,
                    password: doctor.password,
                    dateofbirth: doctor.dateofbirth,
                    gender: doctor.gender,
                    mobileno: doctor.mobileno,
                    altermobileno: doctor.altermobileno,
                    country: doctor.country,
                    state: doctor.state,
                    address1: doctor.address1,
                    address2: doctor.address2,
                    profileimg: doctor.profileimg,
                    speciality: doctor.speciality
            }
          
            });
            
            
        } else {
          return res.json({success: false, msg:'Wrong password'});
        }
    
     });
  });
});

//Profile
router.get('/profile', passport.authenticate('jwt-1', {session:false}), (req, res, next) =>
{
res.json({user: req.user});
console.log(req.user);
});

router.get('/adminprofile', passport.authenticate('jwt', {session:false}), (req, res, next) =>//
{
res.json({user: req.user});
console.log(req.user);
});

router.get('/doctorprofile', passport.authenticate('jwt-2', {session:false}), (req, res, next) =>//
{
res.json({user: req.user});
console.log(req.user);
});

//Get Doctor Consult Time
router.get('/doctorconsulttimeprofile', passport.authenticate('jwt-3', {session:false}), (req, res, next) =>//
{
res.json({user: req.user});
console.log(req.user);
});

router.get('/consulttimedoctors',(req, res, next) => {
  consulttimeRegister.find((err,consulttime) => {
    console.log(consulttime);
      if(err){
          res.json(err);
      }
      res.json(consulttime);
  });
});

router.get('/appointmentdoctors',(req, res, next) => {
  appointmentuserRegister.find((err,appointment) => {
    console.log(appointment);
      if(err){
          res.json(err);
      }
      res.json(appointment);
  });
});

router.get('/description',(req, res, next) => {
  descriptiondoctorRegister.find((err,description) => {
    console.log(description);
      if(err){
          res.json(err);
      }
      res.json(description);
  });
});

router.get('/feedback',(req, res, next) => {
  feedbackuserRegister.find((err,feedback) => {
    console.log(feedback);
      if(err){
          res.json(err);
      }
      res.json(feedback);
  });
});

 //Update Doctor Description Register
 router.put('/descriptionregister/:_id', (req, res) => {
  
let newdescriptiondoctorRegister = new  descriptiondoctorRegister ({
  doctordescription: req.body.doctordescription,
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  descriptiondoctorRegister.updatedescriptionDoctor(_id, newdescriptiondoctorRegister, {}, function(err, description){
       if(err){
         throw err;
       }
       res.json(description);
 });

});


//router.get('/auth/facebook', passport.authenticate('facebook', {scope:'email'}));

//router.get('/auth/facebook/callback',
//passport.authenticate('facebook', { failureRedirect: '/index.html' }),
//function(req, res) {
//    res.redirect('#/user');
//});

//Get All Customers
router.get('/customers',(req, res, next) => {
    userRegister.find((err,user) => {
        if(err){
            res.json(err);
        }
        res.json(user);
    });
});


//Get All Doctors
router.get('/doctors',(req, res, next) => {
  doctorRegister.find((err,doctor) => {
      if(err){
          res.json(err);
      }
      res.json(doctor);
  });
});

//Delete Customer
router.delete('/customer/:_id', (req, res, next) => {
  userRegister.remove({_id: mongojs.ObjectId(req.params._id)}, function(err,user){
      if(err){
          res.send(err);
      }
      res.json(user);
  });
});

//Delete Appointment
router.delete('/appointment/:_id', (req, res, next) => {
  appointmentuserRegister.remove({_id: mongojs.ObjectId(req.params._id)}, function(err,appointment){
      if(err){
          res.send(err);
      }
      res.json(appointment);
  });
});

//Delete Appointment
router.delete('/feedback/:_id', (req, res, next) => {
  feedbackuserRegister.remove({_id: mongojs.ObjectId(req.params._id)}, function(err,feedback){
      if(err){
          res.send(err);
      }
      res.json(feedback);
  });
});

//Delete Doctor
router.delete('/doctor/:_id', (req, res, next) => {
  doctorRegister.remove({_id: mongojs.ObjectId(req.params._id)}, function(err,doctor){
      if(err){
          res.send(err);
      }
      res.json(doctor);
  });
});

//Update Customer Consult Method
router.put('/customerconsultmethod/:_id', (req, res) => {
  
let newappointmentuserRegister = new appointmentuserRegister ({
  consultmethod: req.body.consultmethod
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  appointmentuserRegister.updatecustomerConsultmethod(_id, newappointmentuserRegister, {}, function(err, appointment){
       if(err){
         throw err;
       }
       res.json(appointment);
 });

});

//Update Customer Paypal Transaction ID
router.put('/customerpaytransid/:_id', (req, res) => {
  
let newappointmentuserRegister = new appointmentuserRegister ({
  paytransid: req.body.paytransid
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  appointmentuserRegister.updatecustomerPaytransid(_id, newappointmentuserRegister, {}, function(err, appointment){
       if(err){
         throw err;
       }
       res.json(appointment);
 });

});

//Update Customer Feedback
router.put('/customerfeedback/:_id', (req, res) => {
  
let newfeedbackuserRegister = new feedbackuserRegister ({
  userfeedback: req.body.userfeedback
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  feedbackuserRegister.updatefeedbackUser(_id, newfeedbackuserRegister, {}, function(err, feedback){
       if(err){
         throw err;
       }
       res.json(feedback);
 });

});

//Update Customer Feedback
router.put('/customerfeedbackrating/:_id', (req, res) => {
  
let newfeedbackuserRegister = new feedbackuserRegister ({
  currentRate: req.body.currentRate
});

  //var profileimg = req.file;
  var _id = req.params._id;
  //var newuserRegister = req.body;
  feedbackuserRegister.updatefeedbackRatingUser(_id, newfeedbackuserRegister, {}, function(err, feedback){
       if(err){
         throw err;
       }
       res.json(feedback);
 });

});

 // userRegister.retieveCustomersList((err,customers) => {
   // if(err) throw err;
   
    //if(!customers){
     //   return res.json({success: false, msg:'Customers are not found'});
 // }
  
 // });
//});


module.exports = router;