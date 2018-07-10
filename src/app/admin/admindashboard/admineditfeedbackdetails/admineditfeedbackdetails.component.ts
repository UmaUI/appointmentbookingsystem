import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Feedback} from '../../../../../models/viewfeedback';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Doctor} from '../../../../../models/viewdoctor';
import {Customer} from '../../../../../models/customer';

@Component({
  selector: 'app-admineditfeedbackdetails',
  templateUrl: './admineditfeedbackdetails.component.html',
  styleUrls: ['./admineditfeedbackdetails.component.sass']
})
export class AdmineditfeedbackdetailsComponent implements OnInit {

  public id: any;
  private idSubscription: Subscription;
  feedbacks: Feedback[];
  feedback:Object;
  pid:String;
  name: String;
  appointmentdate: String;
  Consultmethod: String;
  paytransid: String;
  doctors: Doctor[];
  customers: Customer[];
  customer:Object;
  doctor: Object;

  constructor(
    private authService: authService,
    private _flashMessagesService: FlashMessagesService, 
    private router: Router,
    public route: ActivatedRoute
    ) {
    
    }

  ngOnInit() {

    this.idSubscription = this.route.params.subscribe((params: any) => {
      console.log(params.id)
      this.id = params.id;
    });
  
    this.authService.getFeedbackProfile().subscribe(feedbacks =>{
      this.feedbacks = feedbacks; 
      console.log(this.feedbacks);
    
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

