import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Description} from '../../../../../models/viewdescription';


@Component({
  selector: 'app-adddoctordescription',
  templateUrl: './adddoctordescription.component.html',
  styleUrls: ['./adddoctordescription.component.sass']
})
export class AdddoctordescriptionComponent implements OnInit {

  doctordescriptionForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;
  descriptions: Description[];
  description:Object;

  doctordescription: String;
  userid: String;
  today = new Date().toLocaleString();  
  currenttime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  

  constructor(
    fb: FormBuilder,
    private validateService: ValidateService, 
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router,
    public route: ActivatedRoute
   ) { 
      this.doctordescriptionForm = fb.group({
    doctordescription: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])],
  })
}

  ngOnInit() {
    this.userid = this.route.snapshot.params['userid'];
    this.idSubscription = this.route.params.subscribe((params: any) => {
      console.log(params.id)
      this.id = params.id;
    });

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

  onLogoutClick(){
    this.authService.doctorlogout();
    this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
    this.router.navigateByUrl('/doctor/doctorlogin');
    return false;
  }

  onDescriptionSubmit(description){
    //console.log('success');
   var _description = {
    userid: this.userid,
    doctorid:this.id,
    doctordescription: this.doctordescription,
    dateofdescription: this.today,
    timeofdescription: this.currenttime
     };
        // Required Fields
     //console.log(user._id);
     //Update User
     this.authService.addDoctorDescription(_description).subscribe(data =>{
      this._flashMessagesService.show('Your description has been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }