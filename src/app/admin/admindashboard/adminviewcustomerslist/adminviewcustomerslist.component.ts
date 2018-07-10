import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import {Customer} from '../../../../../models/customer';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-adminviewcustomerslist',
  templateUrl: './adminviewcustomerslist.component.html',
  styleUrls: ['./adminviewcustomerslist.component.sass']
})
export class AdminviewcustomerslistComponent implements OnInit {

  customersearchForm:FormGroup;
  emailphone: String;
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
  searchemail: String;
  searchmobileno: String;
  searchaltermobileno: String;

  constructor(
    fb: FormBuilder,
    private authService: authService,
    private _flashMessagesService: FlashMessagesService, 
    private router: Router
    ) {
      this.customersearchForm = fb.group({
        emailphone: ['', Validators.required]
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

onSearchSubmit(customer){

  var searchemail = "";
  var customers = this.customers;
 //var _customer = {
   //emailphone: this.emailphone
   //};
   for(var i =0;i < customers.length; i++){

   
    if(customers[i].email == this.emailphone)
      {
        this.searchemail = customers[i].email;
        console.log(this.searchemail);
      }
     
      if(customers[i].mobileno == this.emailphone)
      {
        this.searchmobileno = customers[i].mobileno;
        console.log(this.searchmobileno);
      }
      
      if(customers[i].altermobileno == this.emailphone)
      {
        this.searchaltermobileno = customers[i].altermobileno;
        console.log(this.searchaltermobileno);
      }
    }
    if( this.searchemail != this.emailphone && this.searchmobileno != this.emailphone && this.searchaltermobileno != this.emailphone )
      {
        this._flashMessagesService.show('Customer details are not available for this email/phone number', {cssClass:'alert-success', timeout: 3000}); 
      }

    
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

