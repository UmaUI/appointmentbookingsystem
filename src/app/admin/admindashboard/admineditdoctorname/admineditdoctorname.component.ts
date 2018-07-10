import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admineditdoctorname',
  templateUrl: './admineditdoctorname.component.html',
  styleUrls: ['./admineditdoctorname.component.sass']
})
export class AdmineditdoctornameComponent implements OnInit {

  doctorForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  name: String;
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
    name: ['', Validators.compose([Validators.required, Validators.maxLength(15)])],
  })
}

  ngOnInit() {
    this.idSubscription = this.route.params.subscribe((params: any) => {
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

   var _doctor = {
    _id:this.id,
     name: this.name,
    
     };
   
     //Update User
     this.authService.updateNameDoctor(_doctor).subscribe(data =>{
      this._flashMessagesService.show('Your name has been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }