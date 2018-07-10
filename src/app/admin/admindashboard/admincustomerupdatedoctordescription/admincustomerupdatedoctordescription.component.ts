import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admincustomerupdatedoctordescription',
  templateUrl: './admincustomerupdatedoctordescription.component.html',
  styleUrls: ['./admincustomerupdatedoctordescription.component.sass']
})
export class AdmincustomerupdatedoctordescriptionComponent implements OnInit {

  doctordescriptionForm:FormGroup;
  public id: any;
  private idSubscription: Subscription;

  doctordescription: String;
 
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

  onupdateDescriptionSubmit(description){

    var _description = {
      _id: this.id,
      doctordescription: this.doctordescription,
       };

       this.authService.updateDoctorDescription(_description).subscribe(data =>{
        this._flashMessagesService.show('Your description has been updated', {cssClass:'alert-success', timeout: 3000}); 
      });  
    }
  
  }