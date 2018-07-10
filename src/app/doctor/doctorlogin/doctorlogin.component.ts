import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.sass']
})
export class DoctorloginComponent implements OnInit {

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
    
    const doctor = {
      email: this.email,
      password: this.password
    }
 
  // Login User
   this.authService.authenticateDoctor(doctor).subscribe(data =>{
     if(data.success){
      this.authService.storeDoctorData(data.token, data.admin);
  
      this._flashMessagesService.show('You are now logged in', {cssClass: 'alert-success', timeout:3000});
           this.router.navigateByUrl('/doctor/doctordashboard');
    }else{
      this._flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
      this.router.navigateByUrl('/doctor/doctorlogin');
     }
   });
  }

 
}



