import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {Http, Response, Headers} from "@angular/http"; 
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
const URL = 'http://localhost:3000/file/upload';

@Component({
  selector: 'app-admineditcustomerprofileimg',
  templateUrl: './admineditcustomerprofileimg.component.html',
  styleUrls: ['./admineditcustomerprofileimg.component.sass']
})
export class AdmineditcustomerprofileimgComponent implements OnInit {
  customerForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  profileimg: String;
  customer:Object;
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
      this.customerForm = fb.group({
    profileimg: ['']
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

  upload(customer) {
    
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
                 formData.append('_id', this.id);
                 formData.append('photo', inputEl.files.item(0));
             //call the angular http method
             this.http
         //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
                 .post(URL, formData).map((res:Response) => res.json()).subscribe(
                
                 //map the success function and alert the response
                  (success) => {
                         
                          alert('Your profile pic have been uploaded .Please click update button to save it');
                 },
                 (error) => alert(error)
               )
           }
           this.profileimg = d.getDate() + '-'+ d.getMonth() + '-'+ d.getFullYear() + '-' +inputEl.files.item(0).name;
         
        }
    

  onUpdateSubmit(customer){

   var _customer = {
    _id:this.id,
     profileimg: this.profileimg,
    
     };
    
     if(this.profileimg!=undefined)
     {
     //Update User
     this.authService.updateProfileimgCustomer(_customer).subscribe(data =>{
      this._flashMessagesService.show('Your profile image has been saved', {cssClass:'alert-success', timeout: 3000}); 
    }); 

    }else

     { this._flashMessagesService.show('Please choose profile image and click upload', {cssClass:'alert-danger', timeout: 3000});}
        }
  
  }

