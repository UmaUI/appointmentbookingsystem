import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admineditdoctorusername',
  templateUrl: './admineditdoctorusername.component.html',
  styleUrls: ['./admineditdoctorusername.component.sass']
})
export class AdmineditdoctorusernameComponent implements OnInit {

  doctorForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  username: String;
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
    username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(7)])],
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
 
  onLogoutClick(){
    this.authService.adminlogout();
    this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
    this.router.navigateByUrl('/admin/adminlogin');
    return false;
  }
  
  onUpdateSubmit(doctor){
    //console.log('success');
   var _doctor = {
    _id:this.id,
     username: this.username,
    
     };
        // Required Fields
     //console.log(user._id);
     //Update User
     this.authService.updateUsernameDoctor(_doctor).subscribe(data =>{
      this._flashMessagesService.show('Your username has been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }