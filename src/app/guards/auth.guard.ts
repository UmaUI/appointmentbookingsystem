import { Injectable } from '@angular/core';
import { authService } from '../services/auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    user:Object;
    constructor(
      private authService: authService,
      private router: Router
    ) { }

    canActivate(){
       if(this.authService.loggedIn()){
           return true;
       } else {
        this.router.navigateByUrl('/user/login');
           return false;
       }
    }

}