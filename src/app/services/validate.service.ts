import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }
  
  validateSignup(user){
    
    if(user.name == undefined || user.mobileno== undefined || user.username == undefined || user.email == undefined || user.password == undefined || user.accept== undefined ){
    return false;
  } else {
    return true;
  }
  }

  validateAdminSignup(admin){
    
    if(admin.name == undefined || admin.mobileno== undefined || admin.username == undefined || admin.email == undefined || admin.password == undefined || admin.accept== undefined){
    return false;
  } else {
    return true;
  }
  }


  validateDoctorSignup(doctor){
    
    if(doctor.name == undefined || doctor.mobileno== undefined || doctor.username == undefined || doctor.email == undefined || doctor.password == undefined){
    return false;
  } else {
    return true;
  }
  }
 


  validateEmail(email) {

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

   

  validateMobileno(mobileno) {
    
        var re = /^\d{3}-\d{3}-\d{4}$/;
        return re.test(mobileno);
   }

   validateTransid(transval){
    
    if(transval.TransactionID != transval.paytransid){
    return false;
  } else {
    return true;
  }
  }
   }
       
