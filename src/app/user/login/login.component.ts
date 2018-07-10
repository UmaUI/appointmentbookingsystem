import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {



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
    
    const user = {
      email: this.email,
      password: this.password
    }
 
  // Login User
   this.authService.authenticateUser(user).subscribe(data =>{
     if(data.success){
      this.authService.storeUserData(data.token, data.user);
     

      this._flashMessagesService.show('You are now logged in', {cssClass: 'alert-success', timeout:3000});
      this.router.navigateByUrl('/user/dashboard');
    }else{
      this._flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
      this.router.navigateByUrl('/user/login');
     }
   });
  }

 
}
