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
  selector: 'app-admincustomerdoctordescription',
  templateUrl: './admincustomerdoctordescription.component.html',
  styleUrls: ['./admincustomerdoctordescription.component.sass']
})
export class AdmincustomerdoctordescriptionComponent implements OnInit {

  doctordescriptionForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;
  descriptions: Description[];
  description:Object;

  doctordescription: String;
  userid: String;
  doctorid: String;
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
    this.doctorid = this.route.snapshot.params['doctorid'];
    

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

  onLogoutClick(){
    this.authService.doctorlogout();
    this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
    this.router.navigateByUrl('/doctor/doctorlogin');
    return false;
  }

  onDescriptionSubmit(description){
   var _description = {
    userid: this.userid,
    doctorid:this.doctorid,
    doctordescription: this.doctordescription,
    dateofdescription: this.today,
    timeofdescription: this.currenttime
     };

     this.authService.addDoctorDescription(_description).subscribe(data =>{
      this._flashMessagesService.show('Your description has been saved', {cssClass:'alert-success', timeout: 3000}); 
    });  
     
        }
  
  }