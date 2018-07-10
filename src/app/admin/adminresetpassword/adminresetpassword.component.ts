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
  selector: 'app-adminresetpassword',
  templateUrl: './adminresetpassword.component.html',
  styleUrls: ['./adminresetpassword.component.sass']
})
export class AdminresetpasswordComponent implements OnInit {

  adminForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  password: String;
  admin:Object;
  constructor(
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router,
    public route: ActivatedRoute
   ) { 
      this.adminForm = fb.group({
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

  onResetPasswordSubmit(admin){
    //console.log('success');
   var _admin = {
    _id:this.id,
     password: this.password,
    
     };
        // Required Fields
     //console.log(user._id);
     //Update User
     this.authService.resetAdminPassword(_admin).subscribe(data =>{
      this._flashMessagesService.show('Your Password have been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }
  
  