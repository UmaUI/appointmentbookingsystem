import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Customer } from '../../../models/customer';

@Injectable()
export class authService {

  authToken: any;
  user: any;
  admin: any;
  doctor: any;
  consulttime: any;
  constructor(
    private _http: Http,
    private _flashMessagesService: FlashMessagesService, 
    private router: Router
  ) { }

  signupUser(user){
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.post('/api/register', user,{headers: headers})
     .map(res => res.json());
  }

  signupAppointmentUser(appointmentuser){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/appointmentregister', appointmentuser,{headers: headers})
      .map(res => res.json());
   }

   addDoctorDescription(description){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/descriptionregister', description,{headers: headers})
      .map(res => res.json());
   }

   addUserFeedback(feedback){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/feedbackregister', feedback,{headers: headers})
      .map(res => res.json());
   }

   updateDoctorDescription(description){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/descriptionregister/'+description._id, JSON.stringify(description), {headers: headers})
     .map(res => res.json());
  }

   signupTempAppointmentUser(tempappointmentuser){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/tempappointmentregister', tempappointmentuser,{headers: headers})
      .map(res => res.json());
   }

  
  signupConsultTime(consulttime){
    console.log(consulttime);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/consulttimeregister', consulttime,{headers: headers})
      .map(res => res.json());
   }
  signupAdmin(admin){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/adminregister', admin,{headers: headers})
      .map(res => res.json());
   }

   signupDoctor(doctor){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/doctorregister', doctor,{headers: headers})
      .map(res => res.json());
   }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/authenticate', user,{headers: headers})
      .map(res => res.json());
   }

   authenticateAdmin(admin){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/adminauthenticate', admin,{headers: headers})
      .map(res => res.json());
   }


   authenticateDoctor(doctor){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/doctorauthenticate', doctor,{headers: headers})
      .map(res => res.json());
   }

   verifyEmail(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/verify', user,{headers: headers})
      .map(res => res.json());
   }

   verifyAdminEmail(admin){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/adminverify', admin,{headers: headers})
      .map(res => res.json());
   }

   retrieveUserPass(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/retrieve', user,{headers: headers})
      .map(res => res.json());
   }

   retrieveAdminPass(admin){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/adminretrieve', admin,{headers: headers})
      .map(res => res.json());
   }

   retrieveDoctorPass(doctor){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/api/doctorretrieve', doctor,{headers: headers})
      .map(res => res.json());
   }


   getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.get('/api/profile',{headers: headers})
      .map(res => res.json());
   }

   getAdminProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.get('/api/adminprofile',{headers: headers})
      .map(res => res.json());
   }

   getDoctorProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.get('/api/doctorprofile',{headers: headers})
      .map(res => res.json());
   }

   getDoctorConsultTimeProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.get('/api/doctorconsulttimeprofile',{headers: headers})
      .map(res => res.json());
   }


   getCustomersProfile(){
    return this._http.get('/api/customers')
     .map(res => res.json());
  }

  getDoctorsProfile(){
    return this._http.get('/api/doctors')
     .map(res => res.json());
  }

  getConsultTimeDoctorsProfile(){
    return this._http.get('/api/consulttimedoctors')
     .map(res => res.json());
  }

  getAppointmentDoctorsProfile(){
    return this._http.get('/api/appointmentdoctors')
     .map(res => res.json());
  }

  getDescriptionProfile(){
    return this._http.get('/api/description')
     .map(res => res.json());
  }

  getFeedbackProfile(){
    return this._http.get('/api/feedback')
     .map(res => res.json());
  }

  getTempAppointmentDoctorsProfile(){
    return this._http.get('/api/tempappointmentdoctors')
     .map(res => res.json());
  }

   updateUser(user){
     console.log(user.profileimg);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put('/api/register/'+user._id, JSON.stringify(user), {headers: headers})
      .map(res => res.json());
   }

   updatePidCustomer(customer){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customerpidregister/'+customer._id, JSON.stringify(customer), {headers: headers})
     .map(res => res.json());
  }

  updateNameCustomer(customer){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customernameregister/'+customer._id, JSON.stringify(customer), {headers: headers})
     .map(res => res.json());
  }

  updateNameDoctor(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/doctornameregister/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }


  updateGenderCustomer(customer){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customergenderregister/'+customer._id, JSON.stringify(customer), {headers: headers})
     .map(res => res.json());
  }

  updateGenderDoctor(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/doctorgenderregister/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }

  updateSpecialityDoctor(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/doctorspecialityregister/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }

  updateActiveCustomer(customer){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customeractiveregister/'+customer._id, JSON.stringify(customer), {headers: headers})
     .map(res => res.json());
  }

  updateActiveDoctor(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/doctoractiveregister/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }

  updateAddressCustomer(customer){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customeraddressregister/'+customer._id, JSON.stringify(customer), {headers: headers})
     .map(res => res.json());
  }

  updateAddressDoctor(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/doctoraddressregister/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }

  updateProfileimgCustomer(customer){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customerprofileimgregister/'+customer._id, JSON.stringify(customer), {headers: headers})
     .map(res => res.json());
  }

  updateProfileimgDoctor(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/doctorprofileimgregister/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }

  updateDateofbirthCustomer(customer){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customerdateofbirthregister/'+customer._id, JSON.stringify(customer), {headers: headers})
     .map(res => res.json());
  }

  updateDateofbirthDoctor(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/doctordateofbirthregister/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }

  updateUsernameCustomer(customer){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customerusernameregister/'+customer._id, JSON.stringify(customer), {headers: headers})
     .map(res => res.json());
  }

  updateUsernameDoctor(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/doctorusernameregister/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }

  updateEmailCustomer(customer){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customeremailregister/'+customer._id, JSON.stringify(customer), {headers: headers})
     .map(res => res.json());
  }


  updateEmailDoctor(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/doctoremailregister/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }

  updateMobilenoCustomer(customer){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customermobilenoregister/'+customer._id, JSON.stringify(customer), {headers: headers})
     .map(res => res.json());
  }

  updateMobilenoDoctor(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/doctormobilenoregister/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }


  updateAltermobilenoCustomer(customer){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customeraltermobilenoregister/'+customer._id, JSON.stringify(customer), {headers: headers})
     .map(res => res.json());
  }

  updateAltermobilenoDoctor(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/doctoraltermobilenoregister/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }

  updateCustomer(customer){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customerregister/'+customer._id, JSON.stringify(customer), {headers: headers})
     .map(res => res.json());
  }


   updateAdmin(admin){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/adminregister/'+admin._id, JSON.stringify(admin), {headers: headers})
     .map(res => res.json());
  }

  updateDoctor(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/doctorregister/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }

  updateConsultTime(consulttime){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/consulttimeregister/'+consulttime._id, JSON.stringify(consulttime), {headers: headers})
     .map(res => res.json());
  }

  updateConsultmethodCustomer(appointment){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customerconsultmethod/'+appointment._id, JSON.stringify(appointment), {headers: headers})
     .map(res => res.json());
  }

  updatePaytransidCustomer(appointment){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customerpaytransid/'+appointment._id, JSON.stringify(appointment), {headers: headers})
     .map(res => res.json());
  }

  updateFeedbackCustomer(feedback){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customerfeedback/'+feedback._id, JSON.stringify(feedback), {headers: headers})
     .map(res => res.json());
  }
  updateFeedbackRatingCustomer(feedback){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/customerfeedbackrating/'+feedback._id, JSON.stringify(feedback), {headers: headers})
     .map(res => res.json());
  }
  saveDoctorImg(doctor){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/savedoctor/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }

  saveAdminImg(admin){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/saveadmin/'+admin._id, JSON.stringify(admin), {headers: headers})
     .map(res => res.json());
  }

  saveUserImg(user){
    //console.log(admin.profileimg);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this._http.put('/api/saveuser/'+user._id, JSON.stringify(user), {headers: headers})
     .map(res => res.json());
  }

   updatePassword(user){
     console.log(user.password);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var username: String;
    username = user.username;
    return this._http.put('/api/profile/'+user._id, JSON.stringify(user), {headers: headers})
      .map(res => res.json());
   }

   updateAdminPassword(admin){
    console.log(admin.password);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   var username: String;
   username = admin.username;
   return this._http.put('/api/adminprofile/'+admin._id, JSON.stringify(admin), {headers: headers})
     .map(res => res.json());
  }

  updateDoctorPassword(doctor){
    console.log(doctor.password);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   var username: String;
   username = doctor.username;
   return this._http.put('/api/doctorprofile/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }


   resetPassword(user){
    console.log(user.password);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   //var username: String;
   //username = user.username;
   return this._http.put('/api/resetpassword/'+user._id, JSON.stringify(user), {headers: headers})
     .map(res => res.json());
  }

  resetAdminPassword(admin){
    console.log(admin.password);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   //var username: String;
   //username = user.username;
   return this._http.put('/api/adminresetpassword/'+admin._id, JSON.stringify(admin), {headers: headers})
     .map(res => res.json());
  }

  resetDoctorPassword(doctor){
    console.log(doctor.password);
   let headers = new Headers();
   headers.append('Content-Type', 'application/json');
   //var username: String;
   //username = user.username;
   return this._http.put('/api/doctorresetpassword/'+doctor._id, JSON.stringify(doctor), {headers: headers})
     .map(res => res.json());
  }

  deleteCustomer(_id){
    return this._http.delete('/api/customer/'+_id)
    .map(res => res.json()); 
  }

  deleteAppointment(_id){
    return this._http.delete('/api/appointment/'+_id)
    .map(res => res.json()); 
  }

  deleteFeedback(_id){
    return this._http.delete('/api/feedback/'+_id)
    .map(res => res.json()); 
  }

  deleteDoctor(_id){
    return this._http.delete('/api/doctor/'+_id)
    .map(res => res.json()); 
  }

   storeUserData(token, user){
     localStorage.setItem('id_token', token);
     localStorage.setItem('user', JSON.stringify(user));
     this.authToken = token;
     this.user = user;
   }

   storeAdminData(admintoken, admin){
    localStorage.setItem('id_token', admintoken);
    localStorage.setItem('admin', JSON.stringify(admin));
    this.authToken = admintoken;
    this.admin = admin;
  }

  storeDoctorData(doctortoken, doctor){
    localStorage.setItem('id_token', doctortoken);
    localStorage.setItem('doctor', JSON.stringify(doctor));
    this.authToken = doctortoken;
    this.doctor = doctor;
  }

   loadToken(){
     const token = localStorage.getItem('id_token');
     this.authToken = token;
   }


   loggedIn(){
     return tokenNotExpired('id_token');
   }
   logout(){
     this.authToken = null;
     this.user = null;
     localStorage.clear();
   }
   mainlogout(){
    this.authToken = null;
    this.user = null;
    this.admin = null;
    this.doctor = null;
    localStorage.clear();
  }
   adminlogout(){
    this.authToken = null;
    this.admin = null;
    localStorage.clear();
  }

  doctorlogout(){
    this.authToken = null;
    this.doctor = null;
    localStorage.clear();
  }
   
}
