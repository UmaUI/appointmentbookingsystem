import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Appointment} from '../../../../../models/viewappointment';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Doctor} from '../../../../../models/viewdoctor';
import {Customer} from '../../../../../models/customer';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admindoctorpastappointmentsdetails',
  templateUrl: './admindoctorpastappointmentsdetails.component.html',
  styleUrls: ['./admindoctorpastappointmentsdetails.component.sass']
})
export class AdmindoctorpastappointmentsdetailsComponent implements OnInit {

  userForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;
  appointments: Appointment[];
  appointment:Object;
  customers: Customer[];
  _id: string;
  userid: String;
  doctorid: String;
  appointmentdate: String;
  appointmenttime: Date;
  consultmethod: String;
  paytransid: String; 
  user:Object;
  doctors: Doctor[];
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
    private router: Router,
    public route: ActivatedRoute
   
  ) { 
     
    } 

  ngOnInit() { 
   
    this.idSubscription = this.route.params.subscribe((params: any) => {
      console.log(params.id)
      this.id = params.id;
    });
  

    this.authService.getAppointmentDoctorsProfile().subscribe(appointments =>{
      this.appointments = appointments; 
      console.log(this.appointments);
    
      },
     err =>{
       console.log(err);
       return false;
     }
    );

    this.authService.getDoctorsProfile().subscribe(doctors =>{
      this.doctors = doctors;
      console.log(this.doctors);
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
    this.authService.adminlogout();
    this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
    this.router.navigateByUrl('/admin/adminlogin');
    return false;
  }


  deleteAppointmentForm(_id){
    
     var r = confirm("Are you sure to delete this customer appointment?");
     if (r == true) {
       var appointments = this.appointments;
       
         this.authService.deleteAppointment(_id).subscribe(data =>{
          
           if(data.n == 1){
               for(var i =0;i < appointments.length; i++){
               if(appointments[i]._id == _id){
                 appointments.splice(i, 1);
               }
             }
       }
       
         });
     } 
    
   }
  
  }
  
  
