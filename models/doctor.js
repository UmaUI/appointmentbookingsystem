const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');


//User Schema
const doctorSchema = mongoose.Schema({
    profileimg: {
        type: String
    },
   name: {
       type: String 
   },
   dateofbirth: {
    type: String
   },
   gender: {
    type: String
   },
   mobileno: {
    type: String 
   },
   altermobileno: {
    type: String 
   },
   country: {
    type: String 
   },
   state: {
    type: String 
   },
   address1: {
    type: String 
   },
   address2: {
   type: String 
   }, 
   username: {
    type: String,
    required: true,
    unique: true
   },
   email: {
       type: String,
       required: true,
       unique: true
   },
   speciality: {
       type: String 
   },
   password: {
    type: String,
    required: true
   },
   active: {
    type: Boolean
   }

});


const doctorRegister = module.exports = mongoose.model('doctorRegister', doctorSchema);

module.exports.getdoctorRegisterById = function(id, callback){
    doctorRegister.findById(id, callback);
    
}

module.exports.adddoctorRegister = function(newdoctorRegister, callback){
  bcrypt.genSalt(10, (err, salt) =>{ 
      bcrypt.hash(newdoctorRegister.password, salt, (err, hash) =>{
          if(err) throw err;
          newdoctorRegister.password = hash;
          newdoctorRegister.save(callback);
      
       });
    });
    }



    module.exports.getdoctorRegisterByEmail = function(email, callback){
        const query = { email: email};
        doctorRegister.findOne(query, callback);
    }

    
module.exports.compareDoctorPassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
      if(err) throw err;
      callback(null, isMatch);
    });
}
   
module.exports.resetdoctorRegisterPassword = function(_id, newdoctorRegister, options, callback){
    
       var query = {_id:_id};
        var update = {
          password: newdoctorRegister.password
       }
   
   //console.log(newuserRegister.password);
        bcrypt.genSalt(10, (err, salt) =>{ 
         bcrypt.hash(newdoctorRegister.password, salt, (err, hash) =>{
             if(err) throw err;
             newdoctorRegister.password = hash;
             newdoctorRegister.set(newdoctorRegister.password, hash);
             update.password = newdoctorRegister.password;
             doctorRegister.findOneAndUpdate(query, update, options, callback);
         });
       });
}

module.exports.retrieveDoctorRegister = function(email, callback){
    const query = { email: email};
    console.log(query);
    doctorRegister.findOne(query, callback);
}

module.exports.updatedoctorRegister = function(_id, newdoctorRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         name: newdoctorRegister.name,
        username: newdoctorRegister.username,
         email: newdoctorRegister.email,
         password: newdoctorRegister.password,
         dateofbirth: newdoctorRegister.dateofbirth,
         gender: newdoctorRegister.gender,
         mobileno: newdoctorRegister.mobileno,
         altermobileno: newdoctorRegister.altermobileno,
         country: newdoctorRegister.country,
         state: newdoctorRegister.state,
         address1: newdoctorRegister.address1,
         address2: newdoctorRegister.address2,
         profileimg: newdoctorRegister.profileimg,
         speciality: newdoctorRegister.speciality
    }
   
      console.log(newdoctorRegister.profileimg);
      doctorRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.savedoctorRegister = function(_id, newdoctorRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         profileimg: newdoctorRegister.profileimg
    }
   
      console.log(newdoctorRegister.profileimg);
      doctorRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.updatedoctorRegisterPassword = function(_id, newdoctorRegister, options, callback){
    
       var query = {_id:_id};
        var update = {
         name: newdoctorRegister.name,
         username: newdoctorRegister.username,
          email: newdoctorRegister.email,
          password: newdoctorRegister.password,
           dateofbirth: newdoctorRegister.dateofbirth,
            gender: newdoctorRegister.gender,
            mobileno: newdoctorRegister.mobileno,
            altermobileno: newdoctorRegister.altermobileno,
            country: newdoctorRegister.country,
            state: newdoctorRegister.state,
            address1: newdoctorRegister.address1,
            address2: newdoctorRegister.address2,
            profileimg: newdoctorRegister.profileimg,
            speciality: newdoctorRegister.speciality
       }
   
   //console.log(newuserRegister.password);
        bcrypt.genSalt(10, (err, salt) =>{ 
         bcrypt.hash(newdoctorRegister.password, salt, (err, hash) =>{
             if(err) throw err;
             newdoctorRegister.password = hash;
             newdoctorRegister.set(newdoctorRegister.password, hash);
             update.password = newdoctorRegister.password;
              doctorRegister.findOneAndUpdate(query, update, options, callback);
         });
       });
     }
     module.exports.updatedoctoractiveRegister = function(_id, newdoctorRegister, options, callback){
        
         var query = {_id:_id};
         var update = {
             active: newdoctorRegister.active
        }
        doctorRegister.findOneAndUpdate(query, update, options, callback);
     
       }

       module.exports.updatedoctoraddressRegister = function(_id, newdoctorRegister, options, callback){
        
         var query = {_id:_id};
         var update = {
             address1: newdoctorRegister.address1,
             address2: newdoctorRegister.address2,
             state: newdoctorRegister.state,
             country: newdoctorRegister.country
        }
        doctorRegister.findOneAndUpdate(query, update, options, callback);
     
       }

       module.exports.updatedoctorgenderRegister = function(_id, newdoctorRegister, options, callback){
        
         var query = {_id:_id};
         var update = {
             gender: newdoctorRegister.gender
        }
        doctorRegister.findOneAndUpdate(query, update, options, callback);
     
       }

       module.exports.updatedoctorspecialityRegister = function(_id, newdoctorRegister, options, callback){
        
         var query = {_id:_id};
         var update = {
            speciality: newdoctorRegister.speciality
        }
        doctorRegister.findOneAndUpdate(query, update, options, callback);
     
       }

       module.exports.updatedoctoremailRegister = function(_id, newdoctorRegister, options, callback){
        
         var query = {_id:_id};
         var update = {
             email: newdoctorRegister.email
        }
        doctorRegister.findOneAndUpdate(query, update, options, callback);
     
       }

       module.exports.updatedoctordateofbirthRegister = function(_id, newdoctorRegister, options, callback){
        
         var query = {_id:_id};
         var update = {
             dateofbirth: newdoctorRegister.dateofbirth
        }
        doctorRegister.findOneAndUpdate(query, update, options, callback);
     
       }

       module.exports.updatedoctoraltermobilenoRegister = function(_id, newdoctorRegister, options, callback){
        
         var query = {_id:_id};
         var update = {
             altermobileno: newdoctorRegister.altermobileno
        }
        doctorRegister.findOneAndUpdate(query, update, options, callback);
     
       }

       module.exports.updatedoctorusernameRegister = function(_id, newdoctorRegister, options, callback){
        
         var query = {_id:_id};
         var update = {
             username: newdoctorRegister.username
        }
         doctorRegister.findOneAndUpdate(query, update, options, callback);
     
       }

       module.exports.updatedoctormobilenoRegister = function(_id, newdoctorRegister, options, callback){
        
         var query = {_id:_id};
         var update = {
             mobileno: newdoctorRegister.mobileno
        }
        doctorRegister.findOneAndUpdate(query, update, options, callback);
     
       }

       module.exports.updatedoctornameRegister = function(_id, newdoctorRegister, options, callback){
        
         var query = {_id:_id};
         var update = {
             name: newdoctorRegister.name
        }
        doctorRegister.findOneAndUpdate(query, update, options, callback);
     
       }
    
       module.exports.updatedoctorprofileimgRegister = function(_id, newdoctorRegister, options, callback){
        
         var query = {_id:_id};
         var update = {
             profileimg: newdoctorRegister.profileimg
        }
        doctorRegister.findOneAndUpdate(query, update, options, callback);
     
       }