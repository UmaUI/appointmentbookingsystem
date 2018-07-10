import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { PasswordValidation } from '../../../guards/password.validation';

@Component({
  selector: 'app-doctoreditpassword',
  templateUrl: './doctoreditpassword.component.html',
  styleUrls: ['./doctoreditpassword.component.sass']
})
export class DoctoreditpasswordComponent implements OnInit {

  doctorForm:FormGroup;
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
  speciality: String;
  //profileimg: File;

  doctor:Object;
  constructor(
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
  ) {   this.doctorForm = fb.group({
    _id: ['', Validators.required],
    profileimg: [],
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    dateofbirth: [''],
    speciality: ['', Validators.required],
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
   
    this.authService.getDoctorProfile().subscribe(profile =>{
      this.doctor = profile.user;
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

onEditPasswordSubmit(doctor){
  //console.log('success');
 var _doctor = {
   _id:doctor._id,
   profileimg: doctor.profileimg,
   name: doctor.name,
   username: doctor.username,
   email: doctor.email,
   password: this.password,
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
      // Required Fields
   console.log(doctor._id);
   //Update User
   this.authService.updateDoctorPassword(_doctor).subscribe(data =>{
    this._flashMessagesService.show('Your Password have been saved', {cssClass:'alert-success', timeout: 3000}); 
  });  
   
      }

}

