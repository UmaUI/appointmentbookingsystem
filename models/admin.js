const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');


//User Schema
const adminSchema = mongoose.Schema({
    profileimg: {
        type: String
    },
   name: {
       type: String 
   },
   dateofbirth: {
    type: String
    //type: Date, default: Date.now
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


const adminRegister = module.exports = mongoose.model('adminRegister', adminSchema);

module.exports.getadminRegisterById = function(id, callback){
    adminRegister.findById(id, callback);
    
}

module.exports.verifyAdminRegisterEmail = function(secretToken, callback){
    const query = { secretToken: secretToken};
    adminRegister.findOne(query, callback);
}

module.exports.getadminRegisterByUsername = function(username, callback){
    const query = { username: username};
    adminRegister.findOne(query, callback);
}

module.exports.compareAdminPassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) =>{
      if(err) throw err;
      callback(null, isMatch);
    });
}

module.exports.getadminRegisterByEmail = function(email, callback){
    const query = { email: email};
    adminRegister.findOne(query, callback);
}

module.exports.verifyAdminRegisterEmail = function(secretToken, callback){
    const query = { secretToken: secretToken};
    adminRegister.findOne(query, callback);
}

module.exports.updateadminRegister = function(_id, newadminRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         name: newadminRegister.name,
        username: newadminRegister.username,
         email: newadminRegister.email,
         password: newadminRegister.password,
         dateofbirth: newadminRegister.dateofbirth,
         gender: newadminRegister.gender,
         mobileno: newadminRegister.mobileno,
         altermobileno: newadminRegister.altermobileno,
         country: newadminRegister.country,
         state: newadminRegister.state,
         address1: newadminRegister.address1,
         address2: newadminRegister.address2,
         profileimg: newadminRegister.profileimg
    }
   
      console.log(newadminRegister.profileimg);
      adminRegister.findOneAndUpdate(query, update, options, callback);
 
   }

  

module.exports.addadminRegister = function(newadminRegister, callback){
  bcrypt.genSalt(10, (err, salt) =>{ 
      bcrypt.hash(newadminRegister.password, salt, (err, hash) =>{
          if(err) throw err;
          newadminRegister.password = hash;
          newadminRegister.save(callback);
      
       });
    });
    }

    module.exports.updateadminRegisterPassword = function(_id, newadminRegister, options, callback){
        
           var query = {_id:_id};
            var update = {
             name: newadminRegister.name,
             username: newadminRegister.username,
              email: newadminRegister.email,
              password: newadminRegister.password,
               dateofbirth: newadminRegister.dateofbirth,
                gender: newadminRegister.gender,
                mobileno: newadminRegister.mobileno,
                altermobileno: newadminRegister.altermobileno,
                country: newadminRegister.country,
                state: newadminRegister.state,
                address1: newadminRegister.address1,
                address2: newadminRegister.address2,
                profileimg: newadminRegister.profileimg
           }
       
       //console.log(newuserRegister.password);
            bcrypt.genSalt(10, (err, salt) =>{ 
             bcrypt.hash(newadminRegister.password, salt, (err, hash) =>{
                 if(err) throw err;
                 newadminRegister.password = hash;
                 newadminRegister.set(newadminRegister.password, hash);
       
                 //console.log(newuserRegister.password);
                 //console.log(newuserRegister);
                 //console.log(update.password);
                 update.password = newadminRegister.password;
                 //console.log(update);
                  //console.log(newuserRegister.password);
                  adminRegister.findOneAndUpdate(query, update, options, callback);
                 
                
       
                 //console.log('win');
             });
           });
            //userRegister.findOneAndUpdate(query, update, options, callback);
         }

         module.exports.retrieveAdminRegister = function(email, callback){
            const query = { email: email};
            console.log(query);
            adminRegister.findOne(query, callback);
        }

        module.exports.resetadminRegisterPassword = function(_id, newadminRegister, options, callback){
            
               var query = {_id:_id};
                var update = {
                  password: newadminRegister.password
               }
           
           //console.log(newuserRegister.password);
                bcrypt.genSalt(10, (err, salt) =>{ 
                 bcrypt.hash(newadminRegister.password, salt, (err, hash) =>{
                     if(err) throw err;
                     newadminRegister.password = hash;
                     newadminRegister.set(newadminRegister.password, hash);
           
                     //console.log(newuserRegister.password);
                     //console.log(newuserRegister);
                     //console.log(update.password);
                     update.password = newadminRegister.password;
                     //console.log(update);
                      //console.log(newuserRegister.password);
                     adminRegister.findOneAndUpdate(query, update, options, callback);
                     
                    
           
                     //console.log('win');
                 });
               });
                //userRegister.findOneAndUpdate(query, update, options, callback);
     
       }

       module.exports.saveadminRegister = function(_id, newadminRegister, options, callback){
        
         var query = {_id:_id};
         var update = {
             profileimg: newadminRegister.profileimg
        }
       
          console.log(newadminRegister.profileimg);
          adminRegister.findOneAndUpdate(query, update, options, callback);
     
       }