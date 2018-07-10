import { Component, OnInit, ElementRef, Input} from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {Http, Response, Headers} from "@angular/http"; 
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
const URL = 'https://consultonline.herokuapp.com/file/upload';

@Component({
  selector: 'app-admineditprofile',
  templateUrl: './admineditprofile.component.html',
  styleUrls: ['./admineditprofile.component.sass']
})
export class AdmineditprofileComponent implements OnInit {

  private file_form;
  adminForm:FormGroup;
  name: String;
  username: String;
  email: String;
  password: String;
  dateofbirth: Date;
  gender: String;
  mobileno: String;
  altermobileno: String;
  country: String;
  state: String;
  address1: String;
  address2: String;
  profileimg: any;
  admin:Object;

  constructor(
    private http: Http, 
    private el: ElementRef,
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
    ) {this.adminForm = fb.group({
    _id: ['', Validators.required],
    profileimg:[],
    name: ['', Validators.compose([Validators.required, Validators.maxLength(15)])] ,
    username: ['', Validators.required],
    email: ['', Validators.required],
    dateofbirth: ['', Validators.required],
    gender: ['', Validators.required],
    mobileno: ['', Validators.required],
    altermobileno: [],
    country: ['', Validators.required],
    state: ['', Validators.required],
    address1: ['', Validators.compose([Validators.required, Validators.maxLength(20)])] ,
    address2: ['', Validators.compose([Validators.required, Validators.maxLength(20)])] ,
    password: ['', Validators.required]
  })
    
    }

  ngOnInit() {
  
    this.authService.getAdminProfile().subscribe(profile =>{
      this.admin = profile.user;
      console.log(this.admin);
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

upload(admin) {
 
  var d = new Date();
  var n = d.getDate();
  //locate the file element meant for the file upload.
      let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
  //get the total amount of files attached to the file input.
      let fileCount: number = inputEl.files.length;
  //create a new fromdata instance
      let formData = new FormData();
  //check if the filecount is greater than zero, to be sure a file was selected.
      if (fileCount > 0) { // a file was selected
          //append the key name 'photo' with the first file in the element
              formData.append('_id', admin._id);
              formData.append('photo', inputEl.files.item(0));
          //call the angular http method
          this.http
      //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
              .post(URL, formData).map((res:Response) => res.json()).subscribe(
             
              //map the success function and alert the response
               (success) => {
                             
                       alert('Your profile pic have been uploaded .Please click save button to save it');
              },
              (error) => alert(error)
            )
        }
        admin.profileimg = d.getDate() + '-'+ d.getMonth() + '-'+ d.getFullYear() + '-' +inputEl.files.item(0).name;
    
        console.log('Photo:'+this.profileimg);
     }
  

 save(admin)
 {
   var d = new Date();
   var n = d.getDate();

  var _admin = {
    _id:admin._id,
    profileimg:admin.profileimg
    };
 
 //Update User
    this.authService.saveAdminImg(_admin).subscribe(data =>{
      console.log( admin.profileimg);
     this._flashMessagesService.show('Your changes have been saved', {cssClass:'alert-success', timeout: 3000}); 
   });  
    
   location.reload();
 
 }
 

onEditSubmit(admin){
  var d = new Date();
  var n = d.getDate();

 var _admin = {
   _id:admin._id,
   profileimg:admin.profileimg,
   pid:admin.pid,
   name: admin.name,
   username: admin.username,
   email: admin.email,
   password: admin.password,
   dateofbirth: admin.dateofbirth,
   gender: admin.gender,
   mobileno: admin.mobileno,
   altermobileno: admin.altermobileno,
   country: admin.country,
   state: admin.state,
   address1: admin.address1,
   address2: admin.address2
   };

    // Validate Email
 if(!this.validateService.validateEmail(admin.email)){
  this._flashMessagesService.show('Please use a valid email', {cssClass: 'alert-danger', timeout:3000});
  return false;
}

// Validate Mobileno
if(!this.validateService.validateMobileno(admin.mobileno)){
  this._flashMessagesService.show('Please use a valid mobileno', {cssClass: 'alert-danger', timeout:3000});
  return false;
}

// Validate Alternate Mobileno
if(!(admin.altermobileno == "")) 
{
  if(!this.validateService.validateMobileno(admin.altermobileno)){
    this._flashMessagesService.show('Please use a valid mobileno', {cssClass: 'alert-danger', timeout:3000});
    return false;
  }
}

//Update User
   this.authService.updateAdmin(_admin).subscribe(data =>{
     console.log( admin.profileimg);
    this._flashMessagesService.show('Your changes have been saved', {cssClass:'alert-success', timeout: 3000}); 
  });  
   
  }

}

