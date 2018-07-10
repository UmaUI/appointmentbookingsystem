import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { PasswordValidation } from '../../guards/password.validation';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctorresetpassword',
  templateUrl: './doctorresetpassword.component.html',
  styleUrls: ['./doctorresetpassword.component.sass']
})
export class DoctorresetpasswordComponent implements OnInit {

  doctorForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  password: String;
  doctor:Object;
  constructor(
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router,
    public route: ActivatedRoute
   ) { 
      this.doctorForm = fb.group({
    password: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])],
    confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(9)])]
  }, {
    validator: PasswordValidation.MatchPassword // your validation method
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

  onResetPasswordSubmit(doctor){
    //console.log('success');
   var _doctor = {
    _id:this.id,
     password: this.password,
    
     };
        // Required Fields
     //console.log(user._id);
     //Update User
     this.authService.resetDoctorPassword(_doctor).subscribe(data =>{
      this._flashMessagesService.show('Your Password have been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }
  
  