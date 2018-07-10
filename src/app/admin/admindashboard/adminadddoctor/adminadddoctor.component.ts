import { Component, OnInit} from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Data } from '@angular/router/src/config';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { PasswordValidation } from '../../../guards/password.validation';

@Component({
  selector: 'app-adminadddoctor',
  templateUrl: './adminadddoctor.component.html',
  styleUrls: ['./adminadddoctor.component.sass']
})
export class AdminadddoctorComponent implements OnInit {

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
  profileimg: File = null;
  speciality:String;

 constructor(
  fb: FormBuilder,
   private validateService: ValidateService, 
   private _flashMessagesService: FlashMessagesService, 
   private authService: authService,
   private router: Router
 ) {  this.doctorForm = fb.group({
  _id: ['', Validators.required],
  profileimg: [],
  name: ['', Validators.required],
  username: ['', Validators.required],
  email: ['', Validators.required],
  dateofbirth: ['', Validators.required],
  gender: ['', Validators.required],
  mobileno: ['', Validators.required],
  speciality: ['', Validators.required],
  altermobileno: [],
  country: [],
  state: [],
  address1: [],
  address2: [],
  password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])],
  confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])]
}, {
  validator: PasswordValidation.MatchPassword // your validation method
})}

 ngOnInit() {
 
 }
   
 onLogoutClick(){
  this.authService.adminlogout();
  this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
  this.router.navigateByUrl('/admin/adminlogin');
  return false;
}

   onSignupSubmit(){
     const doctor = {
       name: this.name,
       username: this.username,
       email: this.email,
       password: this.password,
       dateofbirth:"",
       gender:"",
       mobileno:this.mobileno,
       altermobileno: "",
       country:"",
       state:"",
       address1:"",
       address2:"",
       profileimg:"assets/images/profile.jpg",
       speciality:this.speciality
     }
    // Required Fields
    
    if(!this.validateService.validateDoctorSignup(doctor)){
      this._flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }
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

   // Register User
    this.authService.signupDoctor(doctor).subscribe(data =>{
      console.log(doctor.profileimg);
      if(data.success){
       this._flashMessagesService.show('You are now registered doctor details.', {cssClass: 'alert-success', timeout:3000});
       //this.router.navigate(['/login']);
       //this.router.navigateByUrl('/user/login');
       //this.NgZone.run(() => this.router.navigateByUrl('/user/login'));
     }else{
       this._flashMessagesService.show('username/email already exists.', {cssClass: 'alert-danger', timeout:3000});
       //this.router.navigate(['/signup']);
       //this.router.navigateByUrl('/admin/adminsignup')
      }
    });
   }
  // signInWithGoogle(): void {
 //   this.AuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
//  }

 
}
