import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ElementRef, Input} from '@angular/core';
import { Doctor} from '../../../../../models/viewdoctor';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admincustomerbookappointmentsearch',
  templateUrl: './admincustomerbookappointmentsearch.component.html',
  styleUrls: ['./admincustomerbookappointmentsearch.component.sass']
})
export class AdmincustomerbookappointmentsearchComponent implements OnInit {

  public customerid: any;
  private idSubscription: Subscription;
  doctorbooksearchForm:FormGroup;
  booksearchlocation: String;
  booksearchspeciality: String;
  doctorsearchlocation: String;
  doctorsearchspeciality: String;
  doctors: Doctor[];
  pid:String;
  name: String;
  username: String;
  email: String;
  dateofbirth: Date;
  gender: String;
  mobileno: String;
  altermobileno: String;
  country: String;
  state: String;
  address1: String;
  address2: String;
  profileimg: any;
  speciality: String;
  doctor:Object;
 
  
  constructor(
    fb: FormBuilder,
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router,
    public route: ActivatedRoute
  ) {
    this.doctorbooksearchForm = fb.group({
     doctorsearchlocation: ['', Validators.required],
     doctorsearchspeciality: ['', Validators.required],
     })
     
     }

  ngOnInit() {

    this.idSubscription = this.route.params.subscribe((params: any) => {
      console.log(params.id)
      this.customerid = params.id;
    });

    this.authService.getDoctorsProfile().subscribe(doctors =>{
      this.doctors = doctors;
      console.log(this.doctors);
      },
     err =>{
       console.log(err);
       return false;
     }
    );

  }

  onLogoutClick(){
    this.authService.adminlogout();
    this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
    this.router.navigateByUrl('/admin/adminlogin');
    return false;
  }

  
  onSearchSubmit(doctor){
    
      var doctorsearchlocation = "";
      var doctorsearchspeciality = "";
      var doctors = this.doctors;
  
       for(var i =0;i < doctors.length; i++){
    
       
        if(doctors[i].state == this.doctorsearchlocation)
          {
            this.booksearchlocation = doctors[i].state;
            console.log(this.booksearchlocation);
          }
         
          if(doctors[i].speciality == this.doctorsearchspeciality)
          {
            this.booksearchspeciality = doctors[i].speciality;
            console.log(this.booksearchspeciality);
            
          }
       
        }
          if( this.booksearchlocation != this.doctorsearchlocation || this.booksearchspeciality != this.doctorsearchspeciality || (this.booksearchlocation == undefined && this.booksearchspeciality == undefined))
          {
            this._flashMessagesService.show('Doctor details are not available for this location/speciality', {cssClass:'alert-success', timeout: 3000}); 
          }
  
      }


}
