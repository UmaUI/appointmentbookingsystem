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
  selector: 'app-addcustomerfeedback',
  templateUrl: './addcustomerfeedback.component.html',
  styleUrls: ['./addcustomerfeedback.component.sass']
})
export class AddcustomerfeedbackComponent implements OnInit {

  userfeedbackForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;
  feedbacks: Feedback[];
  feedback:Object;
  currentRate: any;
  userfeedback: String;
  doctorid: String;
  today = new Date().toLocaleString();  
  currenttime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  totalcuttentrate: number = 0;
  totalcuttentratecount: number = 0;
  
  finalrate: number = 0;

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
        currentRate: ['', Validators.required],
  })
}

  ngOnInit() {
    this.doctorid = this.route.snapshot.params['doctorid'];
    this.idSubscription = this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });

    this.authService.getFeedbackProfile().subscribe(feedbacks =>{
      this.feedbacks = feedbacks; 

      for(var i =0;i < feedbacks.length; i++){
        
        if(feedbacks[i].doctorid == this.doctorid){
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
    this.authService.logout();
    this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
    this.router.navigateByUrl('/user/login');
    return false;
  }

  onFeedbackSubmit(feedback){

   var _feedback = {
    doctorid: this.doctorid,
    userid:this.id,
    userfeedback: this.userfeedback,
    dateoffeedback: this.today,
    timeoffeedback: this.currenttime,
    currentRate: this.currentRate
     };
     
     //Update User
     this.authService.addUserFeedback(_feedback).subscribe(data =>{
      this._flashMessagesService.show('Your feedback has been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }
