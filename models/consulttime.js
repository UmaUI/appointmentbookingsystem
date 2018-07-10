const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');


//User Schema
const consulttimeSchema = mongoose.Schema({
 
  _id:String,
  mondayslots0800am: Boolean,
  mondayslots0830am: Boolean,
  mondayslots0900am: Boolean,
  mondayslots0930am: Boolean,
  mondayslots1000am: Boolean,
  mondayslots1030am: Boolean,
  mondayslots1100am: Boolean,
  mondayslots1130am: Boolean,
  mondayslots1200pm: Boolean,
  mondayslots1230pm: Boolean,
  mondayslots0100pm: Boolean,
  mondayslots0130pm: Boolean,
  mondayslots0200pm: Boolean,
  mondayslots0230pm: Boolean,
  mondayslots0300pm: Boolean,
  mondayslots0330pm: Boolean,
  mondayslots0400pm: Boolean,
  mondayslots0430pm: Boolean,
  mondayslots0500pm: Boolean,
  tuesdayslots0800am: Boolean,
  tuesdayslots0830am: Boolean,
  tuesdayslots0900am: Boolean,
  tuesdayslots0930am: Boolean,
  tuesdayslots1000am: Boolean,
  tuesdayslots1030am: Boolean,
  tuesdayslots1100am: Boolean,
  tuesdayslots1130am: Boolean,
  tuesdayslots1200pm: Boolean,
  tuesdayslots1230pm: Boolean,
  tuesdayslots0100pm: Boolean,
  tuesdayslots0130pm: Boolean,
  tuesdayslots0200pm: Boolean,
  tuesdayslots0230pm: Boolean,
  tuesdayslots0300pm: Boolean,
  tuesdayslots0330pm: Boolean,
  tuesdayslots0400pm: Boolean,
  tuesdayslots0430pm: Boolean,
  tuesdayslots0500pm: Boolean,
  wednesdayslots0800am: Boolean,
  wednesdayslots0830am: Boolean,
  wednesdayslots0900am: Boolean,
  wednesdayslots0930am: Boolean,
  wednesdayslots1000am: Boolean,
  wednesdayslots1030am: Boolean,
  wednesdayslots1100am: Boolean,
  wednesdayslots1130am: Boolean,
  wednesdayslots1200pm: Boolean,
  wednesdayslots1230pm: Boolean,
  wednesdayslots0100pm: Boolean,
  wednesdayslots0130pm: Boolean,
  wednesdayslots0200pm: Boolean,
  wednesdayslots0230pm: Boolean,
  wednesdayslots0300pm: Boolean,
  wednesdayslots0330pm: Boolean,
  wednesdayslots0400pm: Boolean,
  wednesdayslots0430pm: Boolean,
  wednesdayslots0500pm: Boolean,
  thursdayslots0800am: Boolean,
  thursdayslots0830am: Boolean,
  thursdayslots0900am: Boolean,
  thursdayslots0930am: Boolean,
  thursdayslots1000am: Boolean,
  thursdayslots1030am: Boolean,
  thursdayslots1100am: Boolean,
  thursdayslots1130am: Boolean,
  thursdayslots1200pm: Boolean,
  thursdayslots1230pm: Boolean,
  thursdayslots0100pm: Boolean,
  thursdayslots0130pm: Boolean,
  thursdayslots0200pm: Boolean,
  thursdayslots0230pm: Boolean,
  thursdayslots0300pm: Boolean,
  thursdayslots0330pm: Boolean,
  thursdayslots0400pm: Boolean,
  thursdayslots0430pm: Boolean,
  thursdayslots0500pm: Boolean,
  fridayslots0800am: Boolean,
  fridayslots0830am: Boolean,
  fridayslots0900am: Boolean,
  fridayslots0930am: Boolean,
  fridayslots1000am: Boolean,
  fridayslots1030am: Boolean,
  fridayslots1100am: Boolean,
  fridayslots1130am: Boolean,
  fridayslots1200pm: Boolean,
  fridayslots1230pm: Boolean,
  fridayslots0100pm: Boolean,
  fridayslots0130pm: Boolean,
  fridayslots0200pm: Boolean,
  fridayslots0230pm: Boolean,
  fridayslots0300pm: Boolean,
  fridayslots0330pm: Boolean,
  fridayslots0400pm: Boolean,
  fridayslots0430pm: Boolean,
  fridayslots0500pm: Boolean,
  saturdayslots0800am: Boolean,
  saturdayslots0830am: Boolean,
  saturdayslots0900am: Boolean,
  saturdayslots0930am: Boolean,
  saturdayslots1000am: Boolean,
  saturdayslots1030am: Boolean,
  saturdayslots1100am: Boolean,
  saturdayslots1130am: Boolean,
  saturdayslots1200pm: Boolean,
  saturdayslots1230pm: Boolean,
  saturdayslots0100pm: Boolean,
  saturdayslots0130pm: Boolean,
  saturdayslots0200pm: Boolean,
  saturdayslots0230pm: Boolean,
  saturdayslots0300pm: Boolean,
  saturdayslots0330pm: Boolean,
  saturdayslots0400pm: Boolean,
  saturdayslots0430pm: Boolean,
  saturdayslots0500pm: Boolean,
  sundayslots0800am: Boolean,
  sundayslots0830am: Boolean,
  sundayslots0900am: Boolean,
  sundayslots0930am: Boolean,
  sundayslots1000am: Boolean,
  sundayslots1030am: Boolean,
  sundayslots1100am: Boolean,
  sundayslots1130am: Boolean,
  sundayslots1200pm: Boolean,
  sundayslots1230pm: Boolean,
  sundayslots0100pm: Boolean,
  sundayslots0130pm: Boolean,
  sundayslots0200pm: Boolean,
  sundayslots0230pm: Boolean,
  sundayslots0300pm: Boolean,
  sundayslots0330pm: Boolean,
  sundayslots0400pm: Boolean,
  sundayslots0430pm: Boolean,
  sundayslots0500pm: Boolean,  
});


const consulttimeRegister = module.exports = mongoose.model('consulttimeRegister', consulttimeSchema);

module.exports.getconsulttimedoctorRegisterById = function(id, callback){
  consulttimeRegister.findById(id, callback);
  
}

module.exports.addconsulttimeRegister = function(newconsulttimeRegister, callback){
            console.log(newconsulttimeRegister);
            newconsulttimeRegister.save(callback);
}

module.exports.updateconsulttimeRegister = function(_id, newconsulttimeRegister, options, callback){
      
       var query = {_id:_id};
       var update = {
        mondayslots0800am: newconsulttimeRegister.mondayslots0800am,
        mondayslots0830am: newconsulttimeRegister.mondayslots0830am,
        mondayslots0900am: newconsulttimeRegister.mondayslots0900am,
        mondayslots0930am: newconsulttimeRegister.mondayslots0930am,
        mondayslots1000am: newconsulttimeRegister.mondayslots1000am,
        mondayslots1030am: newconsulttimeRegister.mondayslots1030am,
        mondayslots1100am: newconsulttimeRegister.mondayslots1100am,
        mondayslots1130am: newconsulttimeRegister.mondayslots1130am,
        mondayslots1200pm: newconsulttimeRegister.mondayslots1200pm,
        mondayslots1230pm: newconsulttimeRegister.mondayslots1230pm,
        mondayslots0100pm:  newconsulttimeRegister.mondayslots0100pm,
        mondayslots0130pm: newconsulttimeRegister.mondayslots0130pm,
        mondayslots0200pm: newconsulttimeRegister.mondayslots0200pm,
        mondayslots0230pm: newconsulttimeRegister.mondayslots0230pm,
        mondayslots0300pm: newconsulttimeRegister.mondayslots0300pm,
        mondayslots0330pm: newconsulttimeRegister.mondayslots0330pm,
        mondayslots0400pm: newconsulttimeRegister.mondayslots0400pm,
        mondayslots0430pm: newconsulttimeRegister.mondayslots0430pm,
        mondayslots0500pm: newconsulttimeRegister.mondayslots0500pm,
        tuesdayslots0800am: newconsulttimeRegister.tuesdayslots0800am,
        tuesdayslots0830am: newconsulttimeRegister.tuesdayslots0830am,
        tuesdayslots0900am: newconsulttimeRegister.tuesdayslots0900am,
        tuesdayslots0930am: newconsulttimeRegister.tuesdayslots0930am,
        tuesdayslots1000am: newconsulttimeRegister.tuesdayslots1000am,
        tuesdayslots1030am: newconsulttimeRegister.tuesdayslots1030am,
        tuesdayslots1100am: newconsulttimeRegister.tuesdayslots1100am,
        tuesdayslots1130am: newconsulttimeRegister.tuesdayslots1130am,
        tuesdayslots1200pm: newconsulttimeRegister.tuesdayslots1200pm,
        tuesdayslots1230pm: newconsulttimeRegister.tuesdayslots1230pm,
        tuesdayslots0100pm:  newconsulttimeRegister.tuesdayslots0100pm,
        tuesdayslots0130pm: newconsulttimeRegister.tuesdayslots0130pm,
        tuesdayslots0200pm: newconsulttimeRegister.tuesdayslots0200pm,
        tuesdayslots0230pm: newconsulttimeRegister.tuesdayslots0230pm,
        tuesdayslots0300pm: newconsulttimeRegister.tuesdayslots0300pm,
        tuesdayslots0330pm: newconsulttimeRegister.tuesdayslots0330pm,
        tuesdayslots0400pm: newconsulttimeRegister.tuesdayslots0400pm,
        tuesdayslots0430pm: newconsulttimeRegister.tuesdayslots0430pm,
        tuesdayslots0500pm: newconsulttimeRegister.tuesdayslots0500pm,
        wednesdayslots0800am: newconsulttimeRegister.wednesdayslots0800am,
        wednesdayslots0830am: newconsulttimeRegister.wednesdayslots0830am,
        wednesdayslots0900am: newconsulttimeRegister.wednesdayslots0900am,
        wednesdayslots0930am: newconsulttimeRegister.wednesdayslots0930am,
        wednesdayslots1000am: newconsulttimeRegister.wednesdayslots1000am,
        wednesdayslots1030am: newconsulttimeRegister.wednesdayslots1030am,
        wednesdayslots1100am: newconsulttimeRegister.wednesdayslots1100am,
        wednesdayslots1130am: newconsulttimeRegister.wednesdayslots1130am,
        wednesdayslots1200pm: newconsulttimeRegister.wednesdayslots1200pm,
        wednesdayslots1230pm: newconsulttimeRegister.wednesdayslots1230pm,
        wednesdayslots0100pm:  newconsulttimeRegister.wednesdayslots0100pm,
        wednesdayslots0130pm: newconsulttimeRegister.wednesdayslots0130pm,
        wednesdayslots0200pm: newconsulttimeRegister.wednesdayslots0200pm,
        wednesdayslots0230pm: newconsulttimeRegister.wednesdayslots0230pm,
        wednesdayslots0300pm: newconsulttimeRegister.wednesdayslots0300pm,
        wednesdayslots0330pm: newconsulttimeRegister.wednesdayslots0330pm,
        wednesdayslots0400pm: newconsulttimeRegister.wednesdayslots0400pm,
        wednesdayslots0430pm: newconsulttimeRegister.wednesdayslots0430pm,
        wednesdayslots0500pm: newconsulttimeRegister.wednesdayslots0500pm,
        thursdayslots0800am: newconsulttimeRegister.thursdayslots0800am,
        thursdayslots0830am: newconsulttimeRegister.thursdayslots0830am,
        thursdayslots0900am: newconsulttimeRegister.thursdayslots0900am,
        thursdayslots0930am: newconsulttimeRegister.thursdayslots0930am,
        thursdayslots1000am: newconsulttimeRegister.thursdayslots1000am,
        thursdayslots1030am: newconsulttimeRegister.thursdayslots1030am,
        thursdayslots1100am: newconsulttimeRegister.thursdayslots1100am,
        thursdayslots1130am: newconsulttimeRegister.thursdayslots1130am,
        thursdayslots1200pm: newconsulttimeRegister.thursdayslots1200pm,
        thursdayslots1230pm: newconsulttimeRegister.thursdayslots1230pm,
        thursdayslots0100pm:  newconsulttimeRegister.thursdayslots0100pm,
        thursdayslots0130pm: newconsulttimeRegister.thursdayslots0130pm,
        thursdayslots0200pm: newconsulttimeRegister.thursdayslots0200pm,
        thursdayslots0230pm: newconsulttimeRegister.thursdayslots0230pm,
        thursdayslots0300pm: newconsulttimeRegister.thursdayslots0300pm,
        thursdayslots0330pm: newconsulttimeRegister.thursdayslots0330pm,
        thursdayslots0400pm: newconsulttimeRegister.thursdayslots0400pm,
        thursdayslots0430pm: newconsulttimeRegister.thursdayslots0430pm,
        thursdayslots0500pm: newconsulttimeRegister.thursdayslots0500pm,
        fridayslots0800am: newconsulttimeRegister.fridayslots0800am,
        fridayslots0830am: newconsulttimeRegister.fridayslots0830am,
        fridayslots0900am: newconsulttimeRegister.fridayslots0900am,
        fridayslots0930am: newconsulttimeRegister.fridayslots0930am,
        fridayslots1000am: newconsulttimeRegister.fridayslots1000am,
        fridayslots1030am: newconsulttimeRegister.fridayslots1030am,
        fridayslots1100am: newconsulttimeRegister.fridayslots1100am,
        fridayslots1130am: newconsulttimeRegister.fridayslots1130am,
        fridayslots1200pm: newconsulttimeRegister.fridayslots1200pm,
        fridayslots1230pm: newconsulttimeRegister.fridayslots1230pm,
        fridayslots0100pm:  newconsulttimeRegister.fridayslots0100pm,
        fridayslots0130pm: newconsulttimeRegister.fridayslots0130pm,
        fridayslots0200pm: newconsulttimeRegister.fridayslots0200pm,
        fridayslots0230pm: newconsulttimeRegister.fridayslots0230pm,
        fridayslots0300pm: newconsulttimeRegister.fridayslots0300pm,
        fridayslots0330pm: newconsulttimeRegister.fridayslots0330pm,
        fridayslots0400pm: newconsulttimeRegister.fridayslots0400pm,
        fridayslots0430pm: newconsulttimeRegister.fridayslots0430pm,
        fridayslots0500pm: newconsulttimeRegister.fridayslots0500pm,
        saturdayslots0800am: newconsulttimeRegister.saturdayslots0800am,
        saturdayslots0830am: newconsulttimeRegister.saturdayslots0830am,
        saturdayslots0900am: newconsulttimeRegister.saturdayslots0900am,
        saturdayslots0930am: newconsulttimeRegister.saturdayslots0930am,
        saturdayslots1000am: newconsulttimeRegister.saturdayslots1000am,
        saturdayslots1030am: newconsulttimeRegister.saturdayslots1030am,
        saturdayslots1100am: newconsulttimeRegister.saturdayslots1100am,
        saturdayslots1130am: newconsulttimeRegister.saturdayslots1130am,
        saturdayslots1200pm: newconsulttimeRegister.saturdayslots1200pm,
        saturdayslots1230pm: newconsulttimeRegister.saturdayslots1230pm,
        saturdayslots0100pm:  newconsulttimeRegister.saturdayslots0100pm,
        saturdayslots0130pm: newconsulttimeRegister.saturdayslots0130pm,
        saturdayslots0200pm: newconsulttimeRegister.saturdayslots0200pm,
        saturdayslots0230pm: newconsulttimeRegister.saturdayslots0230pm,
        saturdayslots0300pm: newconsulttimeRegister.saturdayslots0300pm,
        saturdayslots0330pm: newconsulttimeRegister.saturdayslots0330pm,
        saturdayslots0400pm: newconsulttimeRegister.saturdayslots0400pm,
        saturdayslots0430pm: newconsulttimeRegister.saturdayslots0430pm,
        saturdayslots0500pm: newconsulttimeRegister.saturdayslots0500pm,
        sundayslots0800am: newconsulttimeRegister.sundayslots0800am,
        sundayslots0830am: newconsulttimeRegister.sundayslots0830am,
        sundayslots0900am: newconsulttimeRegister.sundayslots0900am,
        sundayslots0930am: newconsulttimeRegister.sundayslots0930am,
        sundayslots1000am: newconsulttimeRegister.sundayslots1000am,
        sundayslots1030am: newconsulttimeRegister.sundayslots1030am,
        sundayslots1100am: newconsulttimeRegister.sundayslots1100am,
        sundayslots1130am: newconsulttimeRegister.sundayslots1130am,
        sundayslots1200pm: newconsulttimeRegister.sundayslots1200pm,
        sundayslots1230pm: newconsulttimeRegister.sundayslots1230pm,
        sundayslots0100pm:  newconsulttimeRegister.sundayslots0100pm,
        sundayslots0130pm: newconsulttimeRegister.sundayslots0130pm,
        sundayslots0200pm: newconsulttimeRegister.sundayslots0200pm,
        sundayslots0230pm: newconsulttimeRegister.sundayslots0230pm,
        sundayslots0300pm: newconsulttimeRegister.sundayslots0300pm,
        sundayslots0330pm: newconsulttimeRegister.sundayslots0330pm,
        sundayslots0400pm: newconsulttimeRegister.sundayslots0400pm,
        sundayslots0430pm: newconsulttimeRegister.sundayslots0430pm,
        sundayslots0500pm: newconsulttimeRegister.sundayslots0500pm,
      }
     
        consulttimeRegister.findOneAndUpdate(query, update, options, callback);
   
     }