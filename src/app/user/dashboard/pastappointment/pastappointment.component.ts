import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Appointment} from '../../../../../models/viewappointment';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Doctor} from '../../../../../models/viewdoctor';


@Component({
  selector: 'app-pastappointment',
  templateUrl: './pastappointment.component.html',
  styleUrls: ['./pastappointment.component.sass']
})
export class PastappointmentComponent implements OnInit {
 
  public id: any;
  private idSubscription: Subscription;
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
  doctors: Doctor[];

  currenttime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
  
  today = new Date().toISOString().slice(0,10); 
  todayhourvalue = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }).slice(0,-3);
  todayminutevalue = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }).slice(-2);
  todaytimevalue = this.todayhourvalue + this.todayminutevalue;
 
  currenttimevalue = Number(this.todaytimevalue);

  constructor(
    fb: FormBuilder,
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router,
    public route: ActivatedRoute
  ) { 
      this.userForm = fb.group({
        _id: ['', Validators.required],
        
})
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

     this.authService.getProfile().subscribe(profile =>{
      this.user = profile.user;
      console.log(this.user);
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
  }
 

onLogoutClick(){
  this.authService.logout();
  this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
  this.router.navigateByUrl('/user/login');
  return false;
}
  
  }
  
  