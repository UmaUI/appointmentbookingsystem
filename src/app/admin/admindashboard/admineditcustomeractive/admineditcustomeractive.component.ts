import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admineditcustomeractive',
  templateUrl: './admineditcustomeractive.component.html',
  styleUrls: ['./admineditcustomeractive.component.sass']
})
export class AdmineditcustomeractiveComponent implements OnInit {

  customerForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  active: String;
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
    active: ['', Validators.required]
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
     active: this.active,
    
     };

     this.authService.updateActiveCustomer(_customer).subscribe(data =>{
      this._flashMessagesService.show('Your active has been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }
