import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { PasswordValidation } from '../../../guards/password.validation';


@Component({
  selector: 'app-editpassword',
  templateUrl: './editpassword.component.html',
  styleUrls: ['./editpassword.component.sass']
})
export class EditpasswordComponent implements OnInit {
  //public userForm: FormGroup;
  userForm:FormGroup;
  profileimg: any;
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
  //profileimg: File;
  pid: String;

  user:Object;
  constructor(
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
  ) {   this.userForm = fb.group({
    _id: ['', Validators.required],
    pid: [],
    profileimg: [],
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    dateofbirth: [''],
    gender: [''],
    mobileno: [''],
    altermobileno: [],
    country: [],
    state: [],
    address1: [],
    address2: [],
    password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])],
    confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])]
  }, {
    validator: PasswordValidation.MatchPassword // your validation method
  })
}

  ngOnInit() {
   
    this.authService.getProfile().subscribe(profile =>{
      this.user = profile.user;
      },
     err =>{
       console.log(err);
       return false;
     }
    );
  }


onLogoutClick(){
  this.authService.logout();
  this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
  this.router.navigateByUrl('/user/login');
  return false;
}

onEditPasswordSubmit(user){
  //console.log('success');
 var _user = {
   _id:user._id,
   pid:user.pid,
   profileimg: user.profileimg,
   name: user.name,
   username: user.username,
   email: user.email,
   password: this.password,
   dateofbirth: user.dateofbirth,
   gender: user.gender,
   mobileno: user.mobileno,
   altermobileno: user.altermobileno,
   country: user.country,
   state: user.state,
   address1: user.address1,
   address2: user.address2
   };
      // Required Fields
   console.log(user._id);
   //Update User
   this.authService.updatePassword(_user).subscribe(data =>{
    this._flashMessagesService.show('Your Password have been saved', {cssClass:'alert-success', timeout: 3000}); 
  });  
   
      }

}

