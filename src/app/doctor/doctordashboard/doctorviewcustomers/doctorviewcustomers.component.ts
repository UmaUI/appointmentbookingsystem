import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Appointment} from '../../../../../models/viewappointment';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Http, Response } from '@angular/http';
import {Customer} from '../../../../../models/customer';

@Component({
  selector: 'app-doctorviewcustomers',
  templateUrl: './doctorviewcustomers.component.html',
  styleUrls: ['./doctorviewcustomers.component.sass']
})
export class DoctorviewcustomersComponent implements OnInit {

 
  userForm:FormGroup;
  appointments: Appointment[];
  appointment:Object;
  _id: string;
  userid: String;
  doctorid: String;
  appointmentdate: String;
  appointmenttime: Date;
  consultmethod: String;
  paytransid: String; 
  user:Object;
  customers: Customer[];
  customer:Object;

  currenttime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
  
  today = new Date().toISOString().slice(0,10); 
  todayhourvalue = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }).slice(0,-3);
  todayminutevalue = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }).slice(-2);
  todaytimevalue = this.todayhourvalue + this.todayminutevalue;
 
  currenttimevalue = Number(this.todaytimevalue);

  constructor(
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
   
  ) { 
     
    } 

  ngOnInit() { 
   
  

    this.authService.getAppointmentDoctorsProfile().subscribe(appointments =>{
      this.appointments = appointments; 
      console.log(this.appointments);
    
      },
     err =>{
       console.log(err);
       return false;
     }
    );

    this.authService.getCustomersProfile().subscribe(customers =>{
      this.customers = customers;
      console.log(this.customers);
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

 
  
  }
  
  
