import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminverify',
  templateUrl: './adminverify.component.html',
  styleUrls: ['./adminverify.component.sass']
})
export class AdminverifyComponent implements OnInit {

  secretToken: String;
  constructor(private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onVerify(){
    const admin = {
      secretToken: this.secretToken
    }
 
  // Login User
   this.authService.verifyAdminEmail(admin).subscribe(data =>{
     if(data.success){
      this._flashMessagesService.show('You are now verified your email.Log in now.', {cssClass: 'alert-success', timeout:3000});
    }else{
      this._flashMessagesService.show('Please enter valid token.', {cssClass: 'alert-danger', timeout:3000});
      this.router.navigateByUrl('/admin/adminverify');
     }
   });
  }
}
