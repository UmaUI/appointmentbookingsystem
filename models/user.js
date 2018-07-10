const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');


//User Schema
const userSchema = mongoose.Schema({
    profileimg: {
        type: String
    },
   name: {
       type: String 
   },
   pid: {
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
   password: {
    type: String,
    required: true
   },
  secretToken: {
    type: String
   },
   active: {
    type: Boolean
   }

});


const userRegister = module.exports = mongoose.model('userRegister', userSchema);

module.exports.getuserRegisterById = function(id, callback){
    userRegister.findById(id, callback);
    
}

module.exports.getuserRegisterByUsername = function(username, callback){
    const query = { username: username};
    userRegister.findOne(query, callback);
}

module.exports.getuserRegisterByEmail = function(email, callback){
    const query = { email: email};
    userRegister.findOne(query, callback);
}

module.exports.adduserRegister = function(newuserRegister, callback){
  bcrypt.genSalt(10, (err, salt) =>{ 
      bcrypt.hash(newuserRegister.password, salt, (err, hash) =>{
          if(err) throw err;
          newuserRegister.password = hash;
          newuserRegister.save(callback);
       });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
     bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
       if(err) throw err;
       callback(null, isMatch);
     });
}

module.exports.verifyUserRegisterEmail = function(secretToken, callback){
    const query = { secretToken: secretToken};
    userRegister.findOne(query, callback);
}

module.exports.retrieveUserRegister = function(email, callback){
    const query = { email: email};
    console.log(query);
    userRegister.findOne(query, callback);
}

module.exports.updateuserRegister = function(_id, newuserRegister, options, callback){
   
    var query = {_id:_id};
    var update = {
        name: newuserRegister.name,
       username: newuserRegister.username,
        email: newuserRegister.email,
        password: newuserRegister.password,
        dateofbirth: newuserRegister.dateofbirth,
        gender: newuserRegister.gender,
        mobileno: newuserRegister.mobileno,
        altermobileno: newuserRegister.altermobileno,
        country: newuserRegister.country,
        state: newuserRegister.state,
        address1: newuserRegister.address1,
        address2: newuserRegister.address2,
        profileimg: newuserRegister.profileimg,
        pid: newuserRegister.pid
   }
  
     console.log(newuserRegister.profileimg);
    userRegister.findOneAndUpdate(query, update, options, callback);

  }

  module.exports.updatecustomerpidRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         pid: newuserRegister.pid
    }
     userRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.updatecustomernameRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         name: newuserRegister.name
    }
     userRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.updatecustomerprofileimgRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         profileimg: newuserRegister.profileimg
    }
     userRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.updatecustomeraddressRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         address1: newuserRegister.address1,
         address2: newuserRegister.address2,
         state: newuserRegister.state,
         country: newuserRegister.country
    }
     userRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.updatecustomerusernameRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         username: newuserRegister.username
    }
     userRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.updatecustomergenderRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         gender: newuserRegister.gender
    }
     userRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.updatecustomeractiveRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         active: newuserRegister.active
    }
     userRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.updatecustomerdateofbirthRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         dateofbirth: newuserRegister.dateofbirth
    }
     userRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.updatecustomeremailRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         email: newuserRegister.email
    }
     userRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.updatecustomermobilenoRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         mobileno: newuserRegister.mobileno
    }
     userRegister.findOneAndUpdate(query, update, options, callback);
 
   }


   module.exports.updatecustomeraltermobilenoRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         altermobileno: newuserRegister.altermobileno
    }
     userRegister.findOneAndUpdate(query, update, options, callback);
 
   }


   module.exports.updatecustomerRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         pid: newuserRegister.pid,
         name: newuserRegister.name
    }
     userRegister.findOneAndUpdate(query, update, options, callback);
 
   }

  module.exports.updateuserRegisterPassword = function(_id, newuserRegister, options, callback){
 
    var query = {_id:_id};
     var update = {
      name: newuserRegister.name,
      username: newuserRegister.username,
       email: newuserRegister.email,
       password: newuserRegister.password,
        dateofbirth: newuserRegister.dateofbirth,
         gender: newuserRegister.gender,
         mobileno: newuserRegister.mobileno,
         altermobileno: newuserRegister.altermobileno,
         country: newuserRegister.country,
         state: newuserRegister.state,
         address1: newuserRegister.address1,
         address2: newuserRegister.address2,
         profileimg: newuserRegister.profileimg,
         pid: newuserRegister.pid
    }

//console.log(newuserRegister.password);
     bcrypt.genSalt(10, (err, salt) =>{ 
      bcrypt.hash(newuserRegister.password, salt, (err, hash) =>{
          if(err) throw err;
          newuserRegister.password = hash;
          newuserRegister.set(newuserRegister.password, hash);
          update.password = newuserRegister.password;
          userRegister.findOneAndUpdate(query, update, options, callback);
    
      });
    });
    
  }
     module.exports.resetuserRegisterPassword = function(_id, newuserRegister, options, callback){
        
           var query = {_id:_id};
            var update = {
              password: newuserRegister.password
           }
       
       //console.log(newuserRegister.password);
            bcrypt.genSalt(10, (err, salt) =>{ 
             bcrypt.hash(newuserRegister.password, salt, (err, hash) =>{
                 if(err) throw err;
                 newuserRegister.password = hash;
                 newuserRegister.set(newuserRegister.password, hash);
                 update.password = newuserRegister.password;
                 userRegister.findOneAndUpdate(query, update, options, callback);
             });
           });
         
 
   }

   module.exports.saveuserRegister = function(_id, newuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         profileimg: newuserRegister.profileimg
    }
   
      console.log(newuserRegister.profileimg);
      userRegister.findOneAndUpdate(query, update, options, callback);
 
   }