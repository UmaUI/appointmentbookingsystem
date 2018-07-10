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
  selector: 'app-viewuserfeedback',
  templateUrl: './viewuserfeedback.component.html',
  styleUrls: ['./viewuserfeedback.component.sass']
})
export class ViewuserfeedbackComponent implements OnInit {

  userfeedbackForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;
  feedbacks: Feedback[];
  feedback:Object;

  userfeedback: String;
  userid: String;
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

  
  }