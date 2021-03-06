import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admineditcustomeraddress',
  templateUrl: './admineditcustomeraddress.component.html',
  styleUrls: ['./admineditcustomeraddress.component.sass']
})
export class AdmineditcustomeraddressComponent implements OnInit {

  customerForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  country: String;
  state: String;
  address1: String;
  address2: String;
  customer:Object;
  constructor(
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router,
    public route: ActivatedRoute
   ) { 
      this.customerForm = fb.group({
        country: ['', Validators.required],
        state: ['', Validators.required],
        address1: ['', Validators.compose([Validators.required, Validators.maxLength(20)])] ,
        address2: ['', Validators.compose([Validators.required, Validators.maxLength(20)])] 
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

  onUpdateSubmit(customer){
   
   var _customer = {
    _id:this.id,
     address1: this.address1,
     address2: this.address2,
     state: this.state,
     country: this.country
    
     };
 
     this.authService.updateAddressCustomer(_customer).subscribe(data =>{
      this._flashMessagesService.show('Your address has been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }
