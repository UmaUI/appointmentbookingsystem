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
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})



export class EditprofileComponent implements OnInit {
  private file_form;
  userForm:FormGroup;
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
  pid: String;
  user:Object;

  constructor(
    private http: Http, 
    private el: ElementRef,
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
    ) {this.userForm = fb.group({
    _id: ['', Validators.required],
    pid: [],
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
  
    this.authService.getProfile().subscribe(profile =>{
      this.user = profile.user;
      console.log(this.user);
      },
     err =>{
       console.log(err);
       return false;
     }
    );
  }

onLogoutClick(){
  this.authService.logout();
  this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
  this.router.navigateByUrl('/user/login');
  return false;
}

upload(user) {
 
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
              formData.append('_id', user._id);
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
        user.profileimg = d.getDate() + '-'+ d.getMonth() + '-'+ d.getFullYear() + '-' +inputEl.files.item(0).name;
        console.log('Photo:'+this.profileimg);
     }


 save(user)
 {
   var d = new Date();
   var n = d.getDate();

  var _user = {
    _id:user._id,
    profileimg:user.profileimg
    };
 
 //Update User
    this.authService.saveUserImg(_user).subscribe(data =>{
      console.log( user.profileimg);
     this._flashMessagesService.show('Your changes have been saved', {cssClass:'alert-success', timeout: 3000}); 
   });  
    
   location.reload();
 
 }

onEditSubmit(user){
  var d = new Date();
  var n = d.getDate();
 //var profilePic = this.imageUrl + this.profileimg;
 var _user = {
   _id:user._id,
   profileimg:user.profileimg,
   pid:user.pid,
   name: user.name,
   username: user.username,
   email: user.email,
   password: user.password,
   dateofbirth: user.dateofbirth,
   gender: user.gender,
   mobileno: user.mobileno,
   altermobileno: user.altermobileno,
   country: user.country,
   state: user.state,
   address1: user.address1,
   address2: user.address2
   };

    // Validate Email
 if(!this.validateService.validateEmail(user.email)){
  this._flashMessagesService.show('Please use a valid email', {cssClass: 'alert-danger', timeout:3000});
  return false;
}

// Validate Mobileno
if(!this.validateService.validateMobileno(user.mobileno)){
  this._flashMessagesService.show('Please use a valid mobileno', {cssClass: 'alert-danger', timeout:3000});
  return false;
}

// Validate Alternate Mobileno
if(!(user.altermobileno == "")) 
{
  if(!this.validateService.validateMobileno(user.altermobileno)){
    this._flashMessagesService.show('Please use a valid mobileno', {cssClass: 'alert-danger', timeout:3000});
    return false;
  }
}

//Update User
   this.authService.updateUser(_user).subscribe(data =>{
     console.log( user.profileimg);
    this._flashMessagesService.show('Your changes have been saved', {cssClass:'alert-success', timeout: 3000}); 
  });  
   
  }

}

