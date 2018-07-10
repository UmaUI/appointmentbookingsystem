import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admincustomerupdatefeedbackrating',
  templateUrl: './admincustomerupdatefeedbackrating.component.html',
  styleUrls: ['./admincustomerupdatefeedbackrating.component.sass']
})
export class AdmincustomerupdatefeedbackratingComponent implements OnInit {

  userForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  currentRate: any;
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
        currentRate: ['', Validators.required],
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
    //console.log('success');
   var _feedback = {
    _id:this.id,
    currentRate: this.currentRate,
    
     };
        // Required Fields
     //console.log(user._id);
     //Update User
     this.authService.updateFeedbackRatingCustomer(_feedback).subscribe(data =>{
      this._flashMessagesService.show('Your customer feedback rating has been updated', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }