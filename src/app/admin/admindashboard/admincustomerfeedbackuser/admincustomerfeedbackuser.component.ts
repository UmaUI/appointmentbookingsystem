import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Feedback} from '../../../../../models/viewfeedback';

@Component({
  selector: 'app-admincustomerfeedbackuser',
  templateUrl: './admincustomerfeedbackuser.component.html',
  styleUrls: ['./admincustomerfeedbackuser.component.sass']
})
export class AdmincustomerfeedbackuserComponent implements OnInit {

  userfeedbackForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;
  feedbacks: Feedback[];
  feedback:Object;

  userfeedback: String;
  userid: String;
  doctorid: String;
  today = new Date().toLocaleString();  
  currenttime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  

  constructor(
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router,
    public route: ActivatedRoute
   ) { 
      this.userfeedbackForm = fb.group({
    userfeedback: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])],
  })
}

  ngOnInit() {
    this.userid = this.route.snapshot.params['userid'];
    this.doctorid = this.route.snapshot.params['doctorid'];
    

    this.authService.getFeedbackProfile().subscribe(feedbacks =>{
      this.feedbacks = feedbacks; 
      console.log(this.feedbacks);
    
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

  onFeedbackSubmit(feedback){
    //console.log('success');
   var _feedback = {
    userid: this.userid,
    doctorid:this.doctorid,
    userfeedback: this.userfeedback,
    dateoffeedback: this.today,
    timeoffeedback: this.currenttime
     };
 
     this.authService.addUserFeedback(_feedback).subscribe(data =>{
      this._flashMessagesService.show('Your feedback has been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }