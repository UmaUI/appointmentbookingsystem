import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Doctor } from '../../../../../models/viewdoctor';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admineditdoctordetails',
  templateUrl: './admineditdoctordetails.component.html',
  styleUrls: ['./admineditdoctordetails.component.sass']
})
export class AdmineditdoctordetailsComponent implements OnInit {

  public id: any;
  private idSubscription: Subscription;
  doctors: Doctor[];
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
  Speciality: String;
  doctor:Object;

  constructor(
    private authService: authService,
    private _flashMessagesService: FlashMessagesService, 
    private router: Router,
    public route: ActivatedRoute
    ) {
    
    }

  ngOnInit() {

    this.idSubscription = this.route.params.subscribe((params: any) => {
      console.log(params.id)
      this.id = params.id;
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

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
  }

onLogoutClick(){
  this.authService.adminlogout();
  this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
  this.router.navigateByUrl('/admin/adminlogin');
  return false;
}

deleteDoctorForm(_id){
  
   var r = confirm("Are you sure to delete this doctor details?");
   if (r == true) {
     var doctors = this.doctors;
     
       this.authService.deleteDoctor(_id).subscribe(data =>{
        
         if(data.n == 1){
             for(var i =0;i < doctors.length; i++){
             if(doctors[i]._id == _id){
              doctors.splice(i, 1);
             }
           }
     }
     
       });
   } 
  
 }

}

