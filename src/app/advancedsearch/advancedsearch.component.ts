import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ElementRef, Input} from '@angular/core';
import { Doctor} from '../../../models/viewdoctor';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-advancedsearch',
  templateUrl: './advancedsearch.component.html',
  styleUrls: ['./advancedsearch.component.css']
})
export class AdvancedsearchComponent implements OnInit {

  doctortopsearchForm:FormGroup;
  topsearchlocation: String;
  topsearchspeciality: String;
  searchlocation: String;
  searchspeciality: String;
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
    this.doctortopsearchForm = fb.group({
     searchlocation: ['', Validators.required],
     searchspeciality: ['', Validators.required],
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

  onSearchSubmit(doctor){
    
      var searchlocation = "";
      var searchspeciality = "";
      var doctors = this.doctors;
     //var _customer = {
       //emailphone: this.emailphone
       //};
       for(var i =0;i < doctors.length; i++){
    
       
        if(doctors[i].state == this.searchlocation)
          {
            this.topsearchlocation = doctors[i].state;
            console.log(this.topsearchlocation);
          }
         
          if(doctors[i].speciality == this.searchspeciality)
          {
            this.topsearchspeciality = doctors[i].speciality;
            console.log(this.topsearchspeciality);
            
          }
       
        }
          if( this.topsearchlocation != this.searchlocation || this.topsearchspeciality != this.searchspeciality || (this.topsearchlocation == undefined && this.topsearchspeciality == undefined))
          {
            this._flashMessagesService.show('Doctor details are not available for this location/speciality', {cssClass:'alert-success', timeout: 3000}); 
          }
          else
        {
          if( this.topsearchlocation == this.searchlocation && this.topsearchspeciality == this.searchspeciality )      
          {
          window.open('https://consultonline.herokuapp.com/search/'+this.searchlocation+'/'+this.searchspeciality, "_self");
          }
        }
      }


}
