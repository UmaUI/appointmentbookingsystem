import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Feedback} from '../../../../../models/viewfeedback';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Doctor} from '../../../../../models/viewdoctor';
import {Customer} from '../../../../../models/customer';

@Component({
  selector: 'app-adminviewfeedbacks',
  templateUrl: './adminviewfeedbacks.component.html',
  styleUrls: ['./adminviewfeedbacks.component.sass']
})
export class AdminviewfeedbacksComponent implements OnInit {

  userForm:FormGroup;
  feedbacks: Feedback[];
  feedback:Object;
  customers: Customer[];
  _id: string;
  userid: String;
  doctorid: String;
  dateoffeedback: String;
  timeoffeedback: Date;
  userfeedback: String; 
  user:Object;
  doctors: Doctor[];
  customer:Object;

 

  constructor(
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
   
  ) { 
     
    } 

  ngOnInit() { 
   
   

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



  onLogoutClick(){
    this.authService.adminlogout();
    this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
    this.router.navigateByUrl('/admin/adminlogin');
    return false;
  }


  deleteFeedbackForm(_id){
    
     var r = confirm("Are you sure to delete this customer feedback?");
     if (r == true) {
       var feedbacks = this.feedbacks;
       
         this.authService.deleteFeedback(_id).subscribe(data =>{
          
           if(data.n == 1){
               for(var i =0;i < feedbacks.length; i++){
               if(feedbacks[i]._id == _id){
                 feedbacks.splice(i, 1);
               }
             }
       }
       
         });
     } 
    
   }
  
  }
  
  
