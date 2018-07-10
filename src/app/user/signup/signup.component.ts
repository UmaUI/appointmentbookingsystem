import { Component, OnInit} from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Data } from '@angular/router/src/config';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { PasswordValidation } from '../../guards/password.validation';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  
  
  userForm:FormGroup;
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
  pid: String;
  accept: String;

 constructor(
  fb: FormBuilder,
   private validateService: ValidateService, 
   private _flashMessagesService: FlashMessagesService, 
   private authService: authService,
   private router: Router
 ) {  this.userForm = fb.group({
  _id: ['', Validators.required],
  pid: [],
  profileimg: [],
  name: ['', Validators.required],
  username: ['', Validators.required],
  email: ['', Validators.required],
  dateofbirth: [],
  gender: [],
  mobileno: ['', Validators.required],
  altermobileno: [],
  country: [],
  state: [],
  address1: [],
  address2: [],
  accept: ['', Validators.required],
  password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])],
  confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])]
}, {
  validator: PasswordValidation.MatchPassword // your validation method
})}

 ngOnInit() {
 
 }
   
   onSignupSubmit(){
     const user = {
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
       pid:"It will be updated by admin",
       accept:this.accept
     }
    // Required Fields
    
    if(!this.validateService.validateSignup(user)){
      this._flashMessagesService.show('Please fill in all fields and also click check box to accept the terms & conditions', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }
    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
     this._flashMessagesService.show('Please use a valid email', {cssClass: 'alert-danger', timeout:3000});
     return false;
   }

    // Validate Mobileno
    if(!this.validateService.validateMobileno(user.mobileno)){
      this._flashMessagesService.show('Please use a valid mobileno', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

   // Register User
    this.authService.signupUser(user).subscribe(data =>{
      console.log(user.profileimg);
      if(data.success){
       this._flashMessagesService.show('You are now registered. Please check your email to verify email', {cssClass: 'alert-success', timeout:3000});
    
     }else{
       this._flashMessagesService.show('username/email already exists.', {cssClass: 'alert-danger', timeout:3000});
       this.router.navigateByUrl('/user/signup')
      }
    });
   }

 
}
