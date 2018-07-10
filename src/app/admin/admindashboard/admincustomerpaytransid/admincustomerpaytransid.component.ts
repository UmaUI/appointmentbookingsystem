import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admincustomerpaytransid',
  templateUrl: './admincustomerpaytransid.component.html',
  styleUrls: ['./admincustomerpaytransid.component.sass']
})
export class AdmincustomerpaytransidComponent implements OnInit {

  appointmentForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  paytransid: String;
  customer:Object;
  constructor(
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router,
    public route: ActivatedRoute
   ) { 
      this.appointmentForm = fb.group({
    paytransid: ['', Validators.required]
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

  onUpdateSubmit(appointment){
    //console.log('success');
   var _appointment = {
    _id:this.id,
    paytransid: this.paytransid,
    
     };

     this.authService.updatePaytransidCustomer(_appointment).subscribe(data =>{
      this._flashMessagesService.show('Your paypal transaction id has been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }