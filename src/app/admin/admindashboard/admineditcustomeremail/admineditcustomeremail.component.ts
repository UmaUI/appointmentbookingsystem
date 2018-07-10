import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admineditcustomeremail',
  templateUrl: './admineditcustomeremail.component.html',
  styleUrls: ['./admineditcustomeremail.component.sass']
})
export class AdmineditcustomeremailComponent implements OnInit {

  customerForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  email: String;
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
        email: ['', Validators.required]
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
    //console.log('success');
   var _customer = {
    _id:this.id,
     email: this.email,
    
     };

      // Validate Email
 if(!this.validateService.validateEmail(this.email)){
  this._flashMessagesService.show('Please use a valid email', {cssClass: 'alert-danger', timeout:3000});
  return false;
}
  
     this.authService.updateEmailCustomer(_customer).subscribe(data =>{
      this._flashMessagesService.show('Your email has been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  

       

     
        }
  
  }