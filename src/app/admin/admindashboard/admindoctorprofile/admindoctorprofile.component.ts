import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {Http, Response, Headers} from "@angular/http"; 
import { Doctor} from '../../../../../models/viewdoctor';
import { Customer} from '../../../../../models/customer';
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
const URL = 'https://consultonline.herokuapp.com/file/upload';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Feedback} from '../../../../../models/viewfeedback';

@Component({
  selector: 'app-admindoctorprofile',
  templateUrl: './admindoctorprofile.component.html',
  styleUrls: ['./admindoctorprofile.component.sass']
})
export class AdmindoctorprofileComponent implements OnInit {

  private file_form;
  public id: any;
  private idSubscription: Subscription;
  doctors: Doctor[];
  doctor:Object;
  customers: Customer[];
  customer:Object;
  name: String;
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
  user:Object;
  feedbacks: Feedback[];
  feedback:Object;
  totalcuttentrate: number = 0;
  totalcuttentratecount: number = 0;
  
  finalrate: number = 0;

  constructor(
    private http: Http, 
    private el: ElementRef,
    fb: FormBuilder,
    private validateService: ValidateService, 
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

    this.authService.getFeedbackProfile().subscribe(feedbacks =>{
      this.feedbacks = feedbacks; 
      console.log(this.feedbacks);

      for(var i =0;i < feedbacks.length; i++){
        
        if(feedbacks[i].doctorid == this.id){
          this.totalcuttentratecount = this.totalcuttentratecount + 1;
         this.totalcuttentrate = Number(feedbacks[i].currentRate)+ Number(this.totalcuttentrate);
        }
      }
      this.finalrate = Number(this.totalcuttentrate)/Number(this.totalcuttentratecount);
     
    
      },
     err =>{
       console.log(err);
       return false;
     }
    );
  }
  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }

  onLogoutClick(){
    this.authService.adminlogout();
    this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
    this.router.navigateByUrl('/admin/adminlogin');
    return false;
  }


}
