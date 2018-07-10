import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ElementRef, Input} from '@angular/core';
import { Doctor} from '../../../models/viewdoctor';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  
  //public id: any;
  //private idSubscription: Subscription;
  

  searchlocation: String;
  searchspeciality: String;
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
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router,
    public route: ActivatedRoute
  ) {
     
     }

  ngOnInit() {

   // this.idSubscription = this.route.params.subscribe((params: any) => {
   //   console.log(params.id);
   //   this.id =  params.id;
   // });
     
   

    this.authService.getDoctorsProfile().subscribe(doctors =>{
      this.doctors = doctors;
      console.log(this.doctors);
      console.log(doctors.length);
      },
     err =>{
       console.log(err);
       return false;
     }
    );
    this.searchlocation = this.route.snapshot.params['searchlocation'];
    this.searchspeciality = this.route.snapshot.params['searchspeciality'];
    console.log(this.searchlocation);
    console.log(this.searchspeciality);
    //this.onSearchSubmit(this.doctor);
  }

 // ngOnDestroy() {
 //   this.idSubscription.unsubscribe();
 // }

  
}

