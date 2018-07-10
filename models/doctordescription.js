const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');


//User Schema
const descriptiondoctorSchema = mongoose.Schema({

    userid:{
        type: String
    },
    doctorid: {
        type: String
       },
    doctordescription: {
    type: String
   },
   dateofdescription: {
    type: String
   },
   timeofdescription: {
    type: String
     }
  
});


const descriptiondoctorRegister = module.exports = mongoose.model('descriptiondoctorRegister', descriptiondoctorSchema);



module.exports.adddescriptiondoctorRegister = function(newdescriptiondoctorRegister, callback){

          newdescriptiondoctorRegister.save(callback);
}

module.exports.updatedescriptionDoctor = function(_id, newdescriptiondoctorRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         doctordescription: newdescriptiondoctorRegister.doctordescription
    }
    descriptiondoctorRegister.findOneAndUpdate(query, update, options, callback);
 
   }

  