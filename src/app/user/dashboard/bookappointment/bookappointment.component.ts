import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ElementRef, Input} from '@angular/core';
import { Doctor} from '../../../../../models/viewdoctor';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.sass']
})
export class BookappointmentComponent implements OnInit {
 
  doctorbooksearchForm:FormGroup;
  booksearchlocation: String;
  booksearchspeciality: String;
  doctorsearchlocation: String;
  doctorsearchspeciality: String;
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
 
  
  constructor(
    fb: FormBuilder,
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
  ) {
    this.doctorbooksearchForm = fb.group({
     doctorsearchlocation: ['', Validators.required],
     doctorsearchspeciality: ['', Validators.required],
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
    this.authService.logout();
    this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
    this.router.navigateByUrl('/user/login');
    return false;
  }

  
  onSearchSubmit(doctor){
    
      var doctorsearchlocation = "";
      var doctorsearchspeciality = "";
      var doctors = this.doctors;
     //var _customer = {
       //emailphone: this.emailphone
       //};
       for(var i =0;i < doctors.length; i++){
    
       
        if(doctors[i].state == this.doctorsearchlocation)
          {
            this.booksearchlocation = doctors[i].state;
            console.log(this.booksearchlocation);
          }
         
          if(doctors[i].speciality == this.doctorsearchspeciality)
          {
            this.booksearchspeciality = doctors[i].speciality;
            console.log(this.booksearchspeciality);
            
          }
       
        }
          if( this.booksearchlocation != this.doctorsearchlocation || this.booksearchspeciality != this.doctorsearchspeciality || (this.booksearchlocation == undefined && this.booksearchspeciality == undefined))
          {
            this._flashMessagesService.show('Doctor details are not available for this location/speciality', {cssClass:'alert-success', timeout: 3000}); 
          }
       //   else
      //  {
      //    if( this.topsearchlocation == this.searchlocation && this.topsearchspeciality == this.searchspeciality )      
      //    {
      //    window.open('http://localhost:3000/search/'+this.searchlocation+'/'+this.searchspeciality, "_self");
      //    }
     //   }
      }


}
