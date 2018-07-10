import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Doctor} from '../../../../../models/viewdoctor';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-adminviewdoctorslist',
  templateUrl: './adminviewdoctorslist.component.html',
  styleUrls: ['./adminviewdoctorslist.component.sass']
})
export class AdminviewdoctorslistComponent implements OnInit {

  doctorsearchForm:FormGroup;
  emailphone: String;
  doctors: Doctor[];
  pid:String;
  name: String;
  username: String;
  email: String;
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
  searchemail: String;
  searchmobileno: String;
  searchaltermobileno: String;

  constructor(
    fb: FormBuilder,
    private authService: authService,
    private _flashMessagesService: FlashMessagesService, 
    private router: Router
    ) {
      this.doctorsearchForm = fb.group({
        emailphone: ['', Validators.required]
  })
    
    }

  ngOnInit() {
  
    this.authService.getDoctorsProfile().subscribe(doctors =>{
      this.doctors = doctors;
      console.log(this.doctors);
      },
     err =>{
       console.log(err);
       return false;
     }
    );
  }

onLogoutClick(){
  this.authService.adminlogout();
  this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
  this.router.navigateByUrl('/admin/adminlogin');
  return false;
}

onSearchSubmit(doctor){

  var searchemail = "";
  var doctors = this.doctors;
 //var _customer = {
   //emailphone: this.emailphone
   //};
   for(var i =0;i < doctors.length; i++){

   
    if(doctors[i].email == this.emailphone)
      {
        this.searchemail = doctors[i].email;
        console.log(this.searchemail);
      }
     
      if(doctors[i].mobileno == this.emailphone)
      {
        this.searchmobileno = doctors[i].mobileno;
        console.log(this.searchmobileno);
      }
      
      if(doctors[i].altermobileno == this.emailphone)
      {
        this.searchaltermobileno = doctors[i].altermobileno;
        console.log(this.searchaltermobileno);
      }
    }
    if( this.searchemail != this.emailphone && this.searchmobileno != this.emailphone && this.searchaltermobileno != this.emailphone )
      {
        this._flashMessagesService.show('Doctor details are not available for this email/phone number', {cssClass:'alert-success', timeout: 3000}); 
      }

    
  }



deleteDoctorForm(_id){
  
   var r = confirm("Are you sure to delete this doctor details?");
   if (r == true) {
     var doctors = this.doctors;
     
       this.authService.deleteDoctor(_id).subscribe(data =>{
        
         if(data.n == 1){
             for(var i =0;i < doctors.length; i++){
             if(doctors[i]._id == _id){
              doctors.splice(i, 1);
             }
           }
     }
     
       });
   } 
  
 }

}

