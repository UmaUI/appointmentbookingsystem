import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

 

  email: String;
  password: String;

  constructor(
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
  ) { }

  ngOnInit() {
 
  }
  onLoginSubmit(){
    
    const admin = {
      email: this.email,
      password: this.password
    }
 
  // Login User
   this.authService.authenticateAdmin(admin).subscribe(data =>{
     if(data.success){
      this.authService.storeAdminData(data.token, data.admin);
  

      this._flashMessagesService.show('You are now logged in', {cssClass: 'alert-success', timeout:3000});
     
      this.router.navigateByUrl('/admin/admindashboard');
    }else{
      this._flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
  
      this.router.navigateByUrl('/admin/adminlogin');
     }
   });
  }

 
}
