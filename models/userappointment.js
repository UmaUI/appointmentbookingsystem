const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');


//User Schema
const appointmentuserSchema = mongoose.Schema({

    userid:{
        type: String
    },
    doctorid: {
        type: String
       },
    appointmentdate: {
    type: String
    //type: Date, default: Date.now
   },
   systemappointmentdate: {
    type: Date
    //type: Date, default: Date.now
   },
   appointmenttime: {
    type: String
    
   },
   systemappointmenttime: {
    type: Number
    
   },
   consultmethod: {
    type: String
    
   },
   paytransid: {
    type: String
    
   }
  
});


const appointmentuserRegister = module.exports = mongoose.model('appointmentuserRegister', appointmentuserSchema);



module.exports.addappointmentuserRegister = function(newappointmentuserRegister, callback){

          newappointmentuserRegister.save(callback);
}

module.exports.updatecustomerConsultmethod = function(_id, newppointmentuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         consultmethod: newppointmentuserRegister.consultmethod
    }
    appointmentuserRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.updatecustomerPaytransid = function(_id, newppointmentuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         paytransid: newppointmentuserRegister.paytransid
    }
    appointmentuserRegister.findOneAndUpdate(query, update, options, callback);
 
   }