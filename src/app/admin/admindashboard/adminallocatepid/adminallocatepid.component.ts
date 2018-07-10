import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import {Customer} from '../../../../../models/customer';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-adminallocatepid',
  templateUrl: './adminallocatepid.component.html',
  styleUrls: ['./adminallocatepid.component.sass']
})
export class AdminallocatepidComponent implements OnInit {
 
  customerForm:FormGroup;
  customers: Customer[];
  pid:String;
  name: String;
  username: String;
  email: String;
  dateofbirth: Date;
  gender: String;
  mobileno: String;
  altermobileno: String;
  country: String;
  state: String;
  address1: String;
  address2: String;
  profileimg: any;
  customer:Object;
  
  constructor(
    fb: FormBuilder,
    private authService: authService,
    private _flashMessagesService: FlashMessagesService, 
    private router: Router
    ) {this.customerForm = fb.group({
      _id: ['', Validators.required],
      pid:[]
    }) 
    
    }

  ngOnInit() {
  
    this.authService.getCustomersProfile().subscribe(customers =>{
      this.customers = customers;
      console.log(this.customers);
      },
     err =>{
       console.log(err);
       return false;
     }
    );
  }

onLogoutClick(){
  this.authService.adminlogout();
  this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
  this.router.navigateByUrl('/admin/adminlogin');
  return false;
}


  deleteCustomerForm(_id){
 
  var r = confirm("Are you sure to delete this customer?");
  if (r == true) {
    var customers = this.customers;
    
      this.authService.deleteCustomer(_id).subscribe(data =>{
       
        if(data.n == 1){
            for(var i =0;i < customers.length; i++){
            if(customers[i]._id == _id){
              customers.splice(i, 1);
            }
          }
    }
    
      });
  } 
 
}


}

