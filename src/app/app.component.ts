
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from './services/auth.service';
import { Router } from '@angular/router';

import { ElementRef, Input} from '@angular/core';
import { Doctor} from '../../models/viewdoctor';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
const store = require('store');

const MINUTES_UNITL_AUTO_LOGOUT = 10 // in mins
const CHECK_INTERVAL = 1000 // in ms
const STORE_KEY =  'lastAction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  doctorsearchForm:FormGroup;
  doctorsearch: String;
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
  searchname: String;
  searchspeciality: String;
  password: String;
  today = new Date().getFullYear();;

  get lastAction() {
    return parseInt(store.get(STORE_KEY));
  }
  set lastAction(value) {
    store.set(STORE_KEY, value);
  }

  constructor(
    fb: FormBuilder,
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
  ) {
    this.authService = authService;
    this.check();
    this.initListener();
    this.initInterval();
    this.doctorsearchForm = fb.group({
     doctorsearch: ['', Validators.required]
     })
     
     }
  ngOnInit(){
      
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
    initListener() {
      document.body.addEventListener('click', () => this.reset());
    }
  
  
    reset() {
      this.lastAction = Date.now();
    }
  
    initInterval() {
      setInterval(() => {
        this.check();
      }, CHECK_INTERVAL);
    }
  
    check() {
      const now = Date.now();
      const timeleft = this.lastAction + MINUTES_UNITL_AUTO_LOGOUT * 120 * 1000;
      const diff = timeleft - now;
      const isTimeout = diff < 0;
  
      if (isTimeout && this.authService.loggedIn) {
        this.authService.mainlogout();
        this.router.navigateByUrl('/');
        return false;
      }
    }


onSearchSubmit(doctor){
  
    var doctorsearch = "";
    var doctors = this.doctors;
   //var _customer = {
     //emailphone: this.emailphone
     //};
     for(var i =0;i < doctors.length; i++){
  
     
      if(doctors[i].name.toLowerCase().includes(this.doctorsearch.toLowerCase()))
        {
          this.searchname = doctors[i].name.toLowerCase();
          console.log(this.searchname);
          console.log(this.doctorsearch);
        }
       
       
        if(doctors[i].speciality.toLowerCase().includes(this.doctorsearch.toLowerCase()))
        {
          this.searchspeciality = doctors[i].speciality.toLowerCase();
          console.log(this.searchspeciality);
          console.log(this.doctorsearch);
          
        }
       
     
      }
    
        if( this.searchname != undefined || this.searchspeciality != undefined)
        {
          //console.log(this.searchname.includes(this.doctorsearch.toLowerCase()));
        window.open('http://localhost:3000/topsearch/'+this.doctorsearch, "_self");
        }
        else
             {
          this._flashMessagesService.show('Doctor details are not available for this name/speciality', {cssClass:'alert-success', timeout: 3000}); 
        }
    }

    onLoginSubmit(){
      
      const user = {
        email: this.email,
        password: this.password
      }
   
    // Login User
     this.authService.authenticateUser(user).subscribe(data =>{
       if(data.success){
        this.authService.storeUserData(data.token, data.user);
        //console.log(data.token);
  
        this._flashMessagesService.show('You are now logged in', {cssClass: 'alert-success', timeout:3000});
        //this.router.navigate(['/dashboard']);
        this.router.navigateByUrl('/user/dashboard');
      }else{
        this._flashMessagesService.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
        //this.router.navigate(['/login']);
        this.router.navigateByUrl('/');
       }
     });
    }
  
   
}
