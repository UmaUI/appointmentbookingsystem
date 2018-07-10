import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admincustomerupdatefeedback',
  templateUrl: './admincustomerupdatefeedback.component.html',
  styleUrls: ['./admincustomerupdatefeedback.component.sass']
})
export class AdmincustomerupdatefeedbackComponent implements OnInit {

  userForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  userfeedback: String;
  customer:Object;
  constructor(
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router,
    public route: ActivatedRoute
   ) { 
      this.userForm = fb.group({
    userfeedback:  ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])],
  })
}

  ngOnInit() {
    this.idSubscription = this.route.params.subscribe((params: any) => {
      console.log(params.id)
      this.id = params.id;
    });
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

  onUpdateSubmit(feedback){

   var _feedback = {
    _id:this.id,
    userfeedback: this.userfeedback,
    
     };

     this.authService.updateFeedbackCustomer(_feedback).subscribe(data =>{
      this._flashMessagesService.show('Your customer feedback has been updated', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }