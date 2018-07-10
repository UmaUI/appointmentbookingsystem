
const express = require('express');
const multer = require('multer');
const router = express.Router();
let fs = require('fs-extra');
'use strict';

var storage = multer.diskStorage({
  
  destination: function (req, file, cb) {
    let userId = req.body._id;
    let path = `/home/consultonline/src/assets/uploads//${userId}`;
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











