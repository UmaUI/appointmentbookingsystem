import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../services/auth.service';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {Http, Response, Headers} from "@angular/http"; 
import { Customer} from '../../../models/customer';
import { Doctor} from '../../../models/viewdoctor';
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
const URL = 'https://doctorconsultonline.herokuapp.com/file/upload';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Description} from '../../../models/viewdescription';

@Component({
  selector: 'app-customerprofileinfo',
  templateUrl: './customerprofileinfo.component.html',
  styleUrls: ['./customerprofileinfo.component.sass']
})
export class CustomerprofileinfoComponent implements OnInit {

  private file_form;
  public id: any;
  private idSubscription: Subscription;
  customers: Customer[];
  customer:Object;
  doctors: Doctor[];
  doctor:Object;
  name: String;
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
  user:Object;
  descriptions: Description[];
  description:Object;


  constructor(
    private http: Http, 
    private el: ElementRef,
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router,
    public route: ActivatedRoute
    ) {
    }

  ngOnInit() {

    this.idSubscription = this.route.params.subscribe((params: any) => {
      console.log(params.id)
      this.id = params.id;
    });
  
    this.authService.getCustomersProfile().subscribe(customers =>{
      this.customers = customers;
      console.log(this.customers);
      },
     err =>{
       console.log(err);
       return false;
     }
    );

    this.authService.getDoctorsProfile().subscribe(doctors =>{
      this.doctors = doctors;
      console.log(this.doctors);
      },
     err =>{
       console.log(err);
       return false;
     }
    );

    this.authService.getDescriptionProfile().subscribe(descriptions =>{
      this.descriptions = descriptions; 
      console.log(this.descriptions);
    
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



}