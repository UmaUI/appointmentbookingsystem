import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admineditcustomeraltermobileno',
  templateUrl: './admineditcustomeraltermobileno.component.html',
  styleUrls: ['./admineditcustomeraltermobileno.component.sass']
})
export class AdmineditcustomeraltermobilenoComponent implements OnInit {

  customerForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  altermobileno: String;
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
        altermobileno: ['', Validators.required]
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
     altermobileno: this.altermobileno,
    
     };

     // Validate Alternate Mobileno
if(!(this.altermobileno == "")) 
{
  if(!this.validateService.validateMobileno(this.altermobileno)){
    this._flashMessagesService.show('Please use a valid mobileno', {cssClass: 'alert-danger', timeout:3000});
    return false;
  }
}

     this.authService.updateAltermobilenoCustomer(_customer).subscribe(data =>{
      this._flashMessagesService.show('Your mobile number has been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  

       

     
        }
  
  }