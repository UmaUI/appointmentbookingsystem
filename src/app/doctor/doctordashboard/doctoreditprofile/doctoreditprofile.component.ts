import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {Http, Response, Headers} from "@angular/http"; 
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
const URL = 'http://localhost:3000/file/upload';

@Component({
  selector: 'app-doctoreditprofile',
  templateUrl: './doctoreditprofile.component.html',
  styleUrls: ['./doctoreditprofile.component.sass']
})
export class DoctoreditprofileComponent implements OnInit {

  private file_form;
  doctorForm:FormGroup;
  name: String;
  username: String;
  email: String;
  password: String;
  dateofbirth: Date;
  gender: String;
  mobileno: String;
  altermobileno: String;
  country: String;
  state: String;
  address1: String;
  address2: String;
  profileimg: any;
  speciality: String;
  doctor:Object;

  constructor(
    private http: Http, 
    private el: ElementRef,
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
    ) {this.doctorForm = fb.group({
    _id: ['', Validators.required],
    profileimg:[],
    name: ['', Validators.compose([Validators.required, Validators.maxLength(15)])] ,
    username: ['', Validators.required],
    email: ['', Validators.required],
    dateofbirth: ['', Validators.required],
    gender: ['', Validators.required],
    speciality: ['', Validators.required],
    mobileno: ['', Validators.required],
    altermobileno: [],
    country: ['', Validators.required],
    state: ['', Validators.required],
    address1: ['', Validators.compose([Validators.required, Validators.maxLength(20)])] ,
    address2: ['', Validators.compose([Validators.required, Validators.maxLength(20)])] ,
    password: ['', Validators.required]
  })
    
    }

  ngOnInit() {
  
    this.authService.getDoctorProfile().subscribe(profile =>{
      this.doctor = profile.user;
      console.log(this.doctor);
     // console.log(this.profileimg);
      },
     err =>{
       console.log(err);
       return false;
     }
    );
  }

onLogoutClick(){
  this.authService.doctorlogout();
  this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
  this.router.navigateByUrl('/doctor/doctorlogin');
  return false;
}

upload(doctor) {
 
  var d = new Date();
  var n = d.getDate();
  //locate the file element meant for the file upload.
      let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
  //get the total amount of files attached to the file input.
      let fileCount: number = inputEl.files.length;
  //create a new fromdata instance
      let formData = new FormData();
  //check if the filecount is greater than zero, to be sure a file was selected.
      if (fileCount > 0) { // a file was selected
          //append the key name 'photo' with the first file in the element
              formData.append('_id', doctor._id);
              formData.append('photo', inputEl.files.item(0));
          //call the angular http method
          this.http
      //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
              .post(URL, formData).map((res:Response) => res.json()).subscribe(
             
              //map the success function and alert the response
               (success) => {
                //alert(success._body);                
                       alert('Your profile pic have been uploaded .Please click save button to save it');
              },
              (error) => alert(error)
            )
        }
        doctor.profileimg = d.getDate() + '-'+ d.getMonth() + '-'+ d.getFullYear() + '-' +inputEl.files.item(0).name;
        this.profileimg = doctor.profileimg;
        console.log('Photo:'+doctor.profileimg);
     }
     //dateFormat(user) {
      //user.dateofbirth= this.dateofbirth;

     // console.log(this.dateofbirth);
 // }
    

save(doctor)
{
  var d = new Date();
  var n = d.getDate();
 //var profilePic = this.imageUrl + this.profileimg;
 var _doctor = {
   _id:doctor._id,
   profileimg:doctor.profileimg
   };

//Update User
   this.authService.saveDoctorImg(_doctor).subscribe(data =>{
     console.log( doctor.profileimg);
    this._flashMessagesService.show('Your changes have been saved', {cssClass:'alert-success', timeout: 3000}); 
  });  
   
  location.reload();

}

onEditSubmit(doctor){

 
  var d = new Date();
  var n = d.getDate();
 //var profilePic = this.imageUrl + this.profileimg;
 var _doctor = {
   _id:doctor._id,
   profileimg:doctor.profileimg,
   name: doctor.name,
   username: doctor.username,
   email: doctor.email,
   password: doctor.password,
   dateofbirth: doctor.dateofbirth,
   gender: doctor.gender,
   mobileno: doctor.mobileno,
   altermobileno: doctor.altermobileno,
   country: doctor.country,
   state: doctor.state,
   address1: doctor.address1,
   address2: doctor.address2,
   speciality: doctor.speciality
   };

  

    // Validate Email
 if(!this.validateService.validateEmail(doctor.email)){
  this._flashMessagesService.show('Please use a valid email', {cssClass: 'alert-danger', timeout:3000});
  return false;
}

// Validate Mobileno
if(!this.validateService.validateMobileno(doctor.mobileno)){
  this._flashMessagesService.show('Please use a valid mobileno', {cssClass: 'alert-danger', timeout:3000});
  return false;
}

// Validate Alternate Mobileno
if(!(doctor.altermobileno == "")) 
{
  if(!this.validateService.validateMobileno(doctor.altermobileno)){
    this._flashMessagesService.show('Please use a valid mobileno', {cssClass: 'alert-danger', timeout:3000});
    return false;
  }
}

//Update User
   this.authService.updateDoctor(_doctor).subscribe(data =>{
     console.log( doctor.profileimg);
    this._flashMessagesService.show('Your changes have been saved', {cssClass:'alert-success', timeout: 3000}); 
  });  
   
  }

}

