import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admineditdoctorspeciality',
  templateUrl: './admineditdoctorspeciality.component.html',
  styleUrls: ['./admineditdoctorspeciality.component.sass']
})
export class AdmineditdoctorspecialityComponent implements OnInit {

  doctorForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  speciality: String;
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
    speciality: ['', Validators.required]
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
    speciality: this.speciality,
    
     };

     //Update User
     this.authService.updateSpecialityDoctor(_doctor).subscribe(data =>{
      this._flashMessagesService.show('Your speciality has been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }

