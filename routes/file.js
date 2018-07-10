const express = require('express');
const multer = require('multer');
const router = express.Router();
let fs = require('fs-extra');
'use strict';
//
// set the directory for the uploads to the uploaded to
//var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
//var upload = multer({dest: DIR}).single('photo');
//define multer as storage setting
var storage = multer.diskStorage({
  
  destination: function (req, file, cb) {
    let userId = req.body._id;
    let path = `home/doctorconsultonline/src/assets/uploads//${userId}`;
    fs.mkdirsSync(path);
    cb(null, path);
  },
  filename: function (req, file, cb) {
    var d = new Date();
    var n = d.getDate();
      cb(null,  d.getDate() + '-'+ d.getMonth() + '-'+ d.getFullYear() + '-' + file.originalname)
      console.log('file result' + d.getDate() + '-'+ d.getMonth() + '-'+ d.getFullYear() + '-' + file.originalname);
}
})

var upload = multer({ storage: storage }).single('photo');
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

 router.post('/upload', function (req, res, next) {
      var path = '';
      
       upload(req, res, function (err) {
          if (err) {
            // An error occurred when uploading
           console.log(err);
            return res.status(422).json("an Error occured")
        }  
         // No error occured.
          path = req.file.path;
          console.log(path);
          return res.json("Upload Completed for "+path); 
   });     
  })

  
module.exports= router;








