import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorretrieve',
  templateUrl: './doctorretrieve.component.html',
  styleUrls: ['./doctorretrieve.component.sass']
})
export class DoctorretrieveComponent implements OnInit {

  secretEmail: String;
  constructor(private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router) { }

  ngOnInit() {
  }
  onRetrieve(){
    const doctor = {
      secretEmail: this.secretEmail
    }
 
  // Login User
   this.authService.retrieveDoctorPass(doctor).subscribe(data =>{
     if(data.success){
      this._flashMessagesService.show('Check your email for password', {cssClass: 'alert-success', timeout:3000});

    }else{
      this._flashMessagesService.show('Please enter Registered Email', {cssClass: 'alert-danger', timeout:3000});
      this.router.navigateByUrl('/doctor/doctorretrieve');
     }
   });
  }
}
