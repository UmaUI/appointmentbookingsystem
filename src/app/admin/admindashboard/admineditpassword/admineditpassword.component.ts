import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { PasswordValidation } from '../../../guards/password.validation';


@Component({
  selector: 'app-admineditpassword',
  templateUrl: './admineditpassword.component.html',
  styleUrls: ['./admineditpassword.component.sass']
})
export class AdmineditpasswordComponent implements OnInit {

  adminForm:FormGroup;
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

  admin:Object;
  constructor(
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
  ) {   this.adminForm = fb.group({
    _id: ['', Validators.required],
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
   
    this.authService.getAdminProfile().subscribe(profile =>{
      this.admin = profile.user;
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

onEditPasswordSubmit(admin){
  //console.log('success');
 var _admin = {
   _id:admin._id,
   profileimg: admin.profileimg,
   name: admin.name,
   username: admin.username,
   email: admin.email,
   password: this.password,
   dateofbirth: admin.dateofbirth,
   gender: admin.gender,
   mobileno: admin.mobileno,
   altermobileno: admin.altermobileno,
   country: admin.country,
   state: admin.state,
   address1: admin.address1,
   address2: admin.address2
   };
      // Required Fields
   console.log(admin._id);
   //Update User
   this.authService.updateAdminPassword(_admin).subscribe(data =>{
    this._flashMessagesService.show('Your Password have been saved', {cssClass:'alert-success', timeout: 3000}); 
  });  
   
      }

}

