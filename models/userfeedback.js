const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');


//User Schema
const feedbackuserSchema = mongoose.Schema({

    userid:{
        type: String
    },
    doctorid: {
        type: String
       },
    userfeedback: {
    type: String
    //type: Date, default: Date.now
   },
   dateoffeedback: {
    type: String
    //type: Date, default: Date.now
   },
   timeoffeedback: {
    type: String
    //type: Date, default: Date.now
   },
   currentRate: {
    type: String
   }  
  
});


const feedbackuserRegister = module.exports = mongoose.model('feedbackuserRegister', feedbackuserSchema);



module.exports.addfeedbackuserRegister = function(newfeedbackuserRegister, callback){

          newfeedbackuserRegister.save(callback);
}

module.exports.updatefeedbackUser = function(_id, newfeedbackuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
         userfeedback: newfeedbackuserRegister.userfeedback
    }
    feedbackuserRegister.findOneAndUpdate(query, update, options, callback);
 
   }

   module.exports.updatefeedbackRatingUser = function(_id, newfeedbackuserRegister, options, callback){
    
     var query = {_id:_id};
     var update = {
        currentRate: newfeedbackuserRegister.currentRate
    }
    feedbackuserRegister.findOneAndUpdate(query, update, options, callback);
 
   }

