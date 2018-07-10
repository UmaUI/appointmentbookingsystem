import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { FormGroup, FormControl, Validators,  FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enableonlineconsult',
  templateUrl: './enableonlineconsult.component.html',
  styleUrls: ['./enableonlineconsult.component.sass']
})
export class EnableonlineconsultComponent implements OnInit {

  doctor:Object;
  ctdoctor:Object;
  consulttimeForm:FormGroup;
  _id: String;
  mondayslots0800am: Boolean = true;
  mondayslots0830am: Boolean = true;
  mondayslots0900am: Boolean = true;
  mondayslots0930am: Boolean = true;
  mondayslots1000am: Boolean = true;
  mondayslots1030am: Boolean = true;
  mondayslots1100am: Boolean = true;
  mondayslots1130am: Boolean = true;
  mondayslots1200pm: Boolean = true;
  mondayslots1230pm: Boolean = true;
  mondayslots0100pm: Boolean = true;
  mondayslots0130pm: Boolean = true;
  mondayslots0200pm: Boolean = true;
  mondayslots0230pm: Boolean = true;
  mondayslots0300pm: Boolean = true;
  mondayslots0330pm: Boolean = true;
  mondayslots0400pm: Boolean = true;
  mondayslots0430pm: Boolean = true;
  mondayslots0500pm: Boolean = true;
  tuesdayslots0800am: Boolean = true;
  tuesdayslots0830am: Boolean = true;
  tuesdayslots0900am: Boolean = true;
  tuesdayslots0930am: Boolean = true;
  tuesdayslots1000am: Boolean = true;
  tuesdayslots1030am: Boolean = true;
  tuesdayslots1100am: Boolean = true;
  tuesdayslots1130am: Boolean = true;
  tuesdayslots1200pm: Boolean = true;
  tuesdayslots1230pm: Boolean = true;
  tuesdayslots0100pm: Boolean = true;
  tuesdayslots0130pm: Boolean = true;
  tuesdayslots0200pm: Boolean = true;
  tuesdayslots0230pm: Boolean = true;
  tuesdayslots0300pm: Boolean = true;
  tuesdayslots0330pm: Boolean = true;
  tuesdayslots0400pm: Boolean = true;
  tuesdayslots0430pm: Boolean = true;
  tuesdayslots0500pm: Boolean = true;
  wednesdayslots0800am: Boolean = true;
  wednesdayslots0830am: Boolean = true;
  wednesdayslots0900am: Boolean = true;
  wednesdayslots0930am: Boolean = true;
  wednesdayslots1000am: Boolean = true;
  wednesdayslots1030am: Boolean = true;
  wednesdayslots1100am: Boolean = true;
  wednesdayslots1130am: Boolean = true;
  wednesdayslots1200pm: Boolean = true;
  wednesdayslots1230pm: Boolean = true;
  wednesdayslots0100pm: Boolean = true;
  wednesdayslots0130pm: Boolean = true;
  wednesdayslots0200pm: Boolean = true;
  wednesdayslots0230pm: Boolean = true;
  wednesdayslots0300pm: Boolean = true;
  wednesdayslots0330pm: Boolean = true;
  wednesdayslots0400pm: Boolean = true;
  wednesdayslots0430pm: Boolean = true;
  wednesdayslots0500pm: Boolean = true;
  thursdayslots0800am: Boolean = true;
  thursdayslots0830am: Boolean = true;
  thursdayslots0900am: Boolean = true;
  thursdayslots0930am: Boolean = true;
  thursdayslots1000am: Boolean = true;
  thursdayslots1030am: Boolean = true;
  thursdayslots1100am: Boolean = true;
  thursdayslots1130am: Boolean = true;
  thursdayslots1200pm: Boolean = true;
  thursdayslots1230pm: Boolean = true;
  thursdayslots0100pm: Boolean = true;
  thursdayslots0130pm: Boolean = true;
  thursdayslots0200pm: Boolean = true;
  thursdayslots0230pm: Boolean = true;
  thursdayslots0300pm: Boolean = true;
  thursdayslots0330pm: Boolean = true;
  thursdayslots0400pm: Boolean = true;
  thursdayslots0430pm: Boolean = true;
  thursdayslots0500pm: Boolean = true;
  fridayslots0800am: Boolean = true;
  fridayslots0830am: Boolean = true;
  fridayslots0900am: Boolean = true;
  fridayslots0930am: Boolean = true;
  fridayslots1000am: Boolean = true;
  fridayslots1030am: Boolean = true;
  fridayslots1100am: Boolean = true;
  fridayslots1130am: Boolean = true;
  fridayslots1200pm: Boolean = true;
  fridayslots1230pm: Boolean = true;
  fridayslots0100pm: Boolean = true;
  fridayslots0130pm: Boolean = true;
  fridayslots0200pm: Boolean = true;
  fridayslots0230pm: Boolean = true;
  fridayslots0300pm: Boolean = true;
  fridayslots0330pm: Boolean = true;
  fridayslots0400pm: Boolean = true;
  fridayslots0430pm: Boolean = true;
  fridayslots0500pm: Boolean = true;
  saturdayslots0800am: Boolean = true;
  saturdayslots0830am: Boolean = true;
  saturdayslots0900am: Boolean = true;
  saturdayslots0930am: Boolean = true;
  saturdayslots1000am: Boolean = true;
  saturdayslots1030am: Boolean = true;
  saturdayslots1100am: Boolean = true;
  saturdayslots1130am: Boolean = true;
  saturdayslots1200pm: Boolean = true;
  saturdayslots1230pm: Boolean = true;
  saturdayslots0100pm: Boolean = true;
  saturdayslots0130pm: Boolean = true;
  saturdayslots0200pm: Boolean = true;
  saturdayslots0230pm: Boolean = true;
  saturdayslots0300pm: Boolean = true;
  saturdayslots0330pm: Boolean = true;
  saturdayslots0400pm: Boolean = true;
  saturdayslots0430pm: Boolean = true;
  saturdayslots0500pm: Boolean = true;
  sundayslots0800am: Boolean = true;
  sundayslots0830am: Boolean = true;
  sundayslots0900am: Boolean = true;
  sundayslots0930am: Boolean = true;
  sundayslots1000am: Boolean = true;
  sundayslots1030am: Boolean = true;
  sundayslots1100am: Boolean = true;
  sundayslots1130am: Boolean = true;
  sundayslots1200pm: Boolean = true;
  sundayslots1230pm: Boolean = true;
  sundayslots0100pm: Boolean = true;
  sundayslots0130pm: Boolean = true;
  sundayslots0200pm: Boolean = true;
  sundayslots0230pm: Boolean = true;
  sundayslots0300pm: Boolean = true;
  sundayslots0330pm: Boolean = true;
  sundayslots0400pm: Boolean = true;
  sundayslots0430pm: Boolean = true;
  sundayslots0500pm: Boolean = true;
  consultdoc: String;
  consult: String;


  constructor(
    fb: FormBuilder,
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
  ) { 

    this.consulttimeForm = fb.group({
  
     _id: ['', Validators.required],
     mondayslots0800am: ['', Validators.required],
     mondayslots0830am: ['', Validators.required],
     mondayslots0900am: ['', Validators.required],
     mondayslots0930am: ['', Validators.required],
     mondayslots1000am: ['', Validators.required],
     mondayslots1030am: ['', Validators.required],
     mondayslots1100am: ['', Validators.required],
     mondayslots1130am: ['', Validators.required],
     mondayslots1200pm: ['', Validators.required],
     mondayslots1230pm: ['', Validators.required],
     mondayslots0100pm: ['', Validators.required],
     mondayslots0130pm: ['', Validators.required],
     mondayslots0200pm: ['', Validators.required],
     mondayslots0230pm: ['', Validators.required],
     mondayslots0300pm: ['', Validators.required],
     mondayslots0330pm: ['', Validators.required],
     mondayslots0400pm: ['', Validators.required],
     mondayslots0430pm: ['', Validators.required],
     mondayslots0500pm: ['', Validators.required],
     tuesdayslots0800am: ['', Validators.required],
     tuesdayslots0830am: ['', Validators.required],
     tuesdayslots0900am: ['', Validators.required],
     tuesdayslots0930am: ['', Validators.required],
     tuesdayslots1000am: ['', Validators.required],
     tuesdayslots1030am: ['', Validators.required],
     tuesdayslots1100am: ['', Validators.required],
     tuesdayslots1130am: ['', Validators.required],
     tuesdayslots1200pm: ['', Validators.required],
     tuesdayslots1230pm: ['', Validators.required],
     tuesdayslots0100pm: ['', Validators.required],
     tuesdayslots0130pm: ['', Validators.required],
     tuesdayslots0200pm: ['', Validators.required],
     tuesdayslots0230pm: ['', Validators.required],
     tuesdayslots0300pm: ['', Validators.required],
     tuesdayslots0330pm: ['', Validators.required],
     tuesdayslots0400pm: ['', Validators.required],
     tuesdayslots0430pm: ['', Validators.required],
     tuesdayslots0500pm: ['', Validators.required],
     wednesdayslots0800am: ['', Validators.required],
     wednesdayslots0830am: ['', Validators.required],
     wednesdayslots0900am: ['', Validators.required],
     wednesdayslots0930am: ['', Validators.required],
     wednesdayslots1000am: ['', Validators.required],
     wednesdayslots1030am: ['', Validators.required],
     wednesdayslots1100am: ['', Validators.required],
     wednesdayslots1130am: ['', Validators.required],
     wednesdayslots1200pm: ['', Validators.required],
     wednesdayslots1230pm: ['', Validators.required],
     wednesdayslots0100pm: ['', Validators.required],
     wednesdayslots0130pm: ['', Validators.required],
     wednesdayslots0200pm: ['', Validators.required],
     wednesdayslots0230pm: ['', Validators.required],
     wednesdayslots0300pm: ['', Validators.required],
     wednesdayslots0330pm: ['', Validators.required],
     wednesdayslots0400pm: ['', Validators.required],
     wednesdayslots0430pm: ['', Validators.required],
     wednesdayslots0500pm: ['', Validators.required],
     thursdayslots0800am: ['', Validators.required],
     thursdayslots0830am: ['', Validators.required],
     thursdayslots0900am: ['', Validators.required],
     thursdayslots0930am: ['', Validators.required],
     thursdayslots1000am: ['', Validators.required],
     thursdayslots1030am: ['', Validators.required],
     thursdayslots1100am: ['', Validators.required],
     thursdayslots1130am: ['', Validators.required],
     thursdayslots1200pm: ['', Validators.required],
     thursdayslots1230pm: ['', Validators.required],
     thursdayslots0100pm: ['', Validators.required],
     thursdayslots0130pm: ['', Validators.required],
     thursdayslots0200pm: ['', Validators.required],
     thursdayslots0230pm: ['', Validators.required],
     thursdayslots0300pm: ['', Validators.required],
     thursdayslots0330pm: ['', Validators.required],
     thursdayslots0400pm: ['', Validators.required],
     thursdayslots0430pm: ['', Validators.required],
     thursdayslots0500pm: ['', Validators.required],
     fridayslots0800am:  ['', Validators.required],
     fridayslots0830am:  ['', Validators.required],
     fridayslots0900am:  ['', Validators.required],
     fridayslots0930am:  ['', Validators.required],
     fridayslots1000am:  ['', Validators.required],
     fridayslots1030am:  ['', Validators.required],
     fridayslots1100am:  ['', Validators.required],
     fridayslots1130am:  ['', Validators.required],
     fridayslots1200pm:  ['', Validators.required],
     fridayslots1230pm:  ['', Validators.required],
     fridayslots0100pm:  ['', Validators.required],
     fridayslots0130pm:  ['', Validators.required],
     fridayslots0200pm:  ['', Validators.required],
     fridayslots0230pm:  ['', Validators.required],
     fridayslots0300pm:  ['', Validators.required],
     fridayslots0330pm:  ['', Validators.required],
     fridayslots0400pm:  ['', Validators.required],
     fridayslots0430pm:  ['', Validators.required],
     fridayslots0500pm:  ['', Validators.required],
     saturdayslots0800am: ['', Validators.required],
     saturdayslots0830am:['', Validators.required],
     saturdayslots0900am: ['', Validators.required],
     saturdayslots0930am:['', Validators.required],
     saturdayslots1000am: ['', Validators.required],
     saturdayslots1030am: ['', Validators.required],
     saturdayslots1100am: ['', Validators.required],
     saturdayslots1130am: ['', Validators.required],
     saturdayslots1200pm: ['', Validators.required],
     saturdayslots1230pm: ['', Validators.required],
     saturdayslots0100pm: ['', Validators.required],
     saturdayslots0130pm: ['', Validators.required],
     saturdayslots0200pm: ['', Validators.required],
     saturdayslots0230pm: ['', Validators.required],
     saturdayslots0300pm: ['', Validators.required],
     saturdayslots0330pm: ['', Validators.required],
     saturdayslots0400pm: ['', Validators.required],
     saturdayslots0430pm: ['', Validators.required],
     saturdayslots0500pm: ['', Validators.required],
     sundayslots0800am: ['', Validators.required],
     sundayslots0830am: ['', Validators.required],
     sundayslots0900am: ['', Validators.required],
     sundayslots0930am: ['', Validators.required],
     sundayslots1000am: ['', Validators.required],
     sundayslots1030am: ['', Validators.required],
     sundayslots1100am: ['', Validators.required],
     sundayslots1130am: ['', Validators.required],
     sundayslots1200pm: ['', Validators.required],
     sundayslots1230pm: ['', Validators.required],
     sundayslots0100pm: ['', Validators.required],
     sundayslots0130pm: ['', Validators.required],
     sundayslots0200pm: ['', Validators.required],
     sundayslots0230pm: ['', Validators.required],
     sundayslots0300pm: ['', Validators.required],
     sundayslots0330pm: ['', Validators.required],
     sundayslots0400pm: ['', Validators.required],
     sundayslots0430pm: ['', Validators.required],
     sundayslots0500pm: ['', Validators.required],

    });
  }

  ngOnInit() {
  

   this.authService.getDoctorProfile().subscribe(profile =>{
      this.doctor = profile.user;
      console.log(this.doctor);
      },
     err =>{
       console.log(err);
       return false;
     }
    );
    
    this.authService.getDoctorConsultTimeProfile().subscribe(ctprofile =>{
      this.ctdoctor = ctprofile.user;
      console.log(this.ctdoctor);
      },
     err =>{
       this.ctdoctor= 'undifined';
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
  

  onSignupConsultSubmit(consulttime){


    var _ctdoctor = {
      _id : consulttime._id,
      mondayslots0800am: this.mondayslots0800am,
      mondayslots0830am: this.mondayslots0830am,
      mondayslots0900am: this.mondayslots0900am,
      mondayslots0930am: this.mondayslots0930am,
      mondayslots1000am:this.mondayslots1000am,
      mondayslots1030am: this.mondayslots1030am,
      mondayslots1100am: this.mondayslots1100am,
      mondayslots1130am: this.mondayslots1130am,
      mondayslots1200pm: this.mondayslots1200pm,
      mondayslots1230pm: this.mondayslots1230pm,
      mondayslots0100pm:  this.mondayslots0100pm,
      mondayslots0130pm: this.mondayslots0130pm,
      mondayslots0200pm: this.mondayslots0200pm,
      mondayslots0230pm: this.mondayslots0230pm,
      mondayslots0300pm: this.mondayslots0300pm,
      mondayslots0330pm: this.mondayslots0330pm,
      mondayslots0400pm: this.mondayslots0400pm,
      mondayslots0430pm: this.mondayslots0430pm,
      mondayslots0500pm: this.mondayslots0500pm,
      tuesdayslots0800am: this.tuesdayslots0800am,
      tuesdayslots0830am: this.tuesdayslots0830am,
      tuesdayslots0900am: this.tuesdayslots0900am,
      tuesdayslots0930am: this.tuesdayslots0930am,
      tuesdayslots1000am:this.tuesdayslots1000am,
      tuesdayslots1030am: this.tuesdayslots1030am,
      tuesdayslots1100am: this.tuesdayslots1100am,
      tuesdayslots1130am: this.tuesdayslots1130am,
      tuesdayslots1200pm: this.tuesdayslots1200pm,
      tuesdayslots1230pm: this.tuesdayslots1230pm,
      tuesdayslots0100pm:  this.tuesdayslots0100pm,
      tuesdayslots0130pm: this.tuesdayslots0130pm,
      tuesdayslots0200pm: this.tuesdayslots0200pm,
      tuesdayslots0230pm: this.tuesdayslots0230pm,
      tuesdayslots0300pm: this.tuesdayslots0300pm,
      tuesdayslots0330pm: this.tuesdayslots0330pm,
      tuesdayslots0400pm: this.tuesdayslots0400pm,
      tuesdayslots0430pm: this.tuesdayslots0430pm,
      tuesdayslots0500pm: this.tuesdayslots0500pm,
      wednesdayslots0800am: this.wednesdayslots0800am,
      wednesdayslots0830am: this.wednesdayslots0830am,
      wednesdayslots0900am: this.wednesdayslots0900am,
      wednesdayslots0930am: this.wednesdayslots0930am,
      wednesdayslots1000am:this.wednesdayslots1000am,
      wednesdayslots1030am: this.wednesdayslots1030am,
      wednesdayslots1100am: this.wednesdayslots1100am,
      wednesdayslots1130am: this.wednesdayslots1130am,
      wednesdayslots1200pm: this.wednesdayslots1200pm,
      wednesdayslots1230pm: this.wednesdayslots1230pm,
      wednesdayslots0100pm:  this.wednesdayslots0100pm,
      wednesdayslots0130pm: this.wednesdayslots0130pm,
      wednesdayslots0200pm: this.wednesdayslots0200pm,
      wednesdayslots0230pm: this.wednesdayslots0230pm,
      wednesdayslots0300pm: this.wednesdayslots0300pm,
      wednesdayslots0330pm: this.wednesdayslots0330pm,
      wednesdayslots0400pm: this.wednesdayslots0400pm,
      wednesdayslots0430pm: this.wednesdayslots0430pm,
      wednesdayslots0500pm: this.wednesdayslots0500pm,
      thursdayslots0800am: this.thursdayslots0800am,
      thursdayslots0830am: this.thursdayslots0830am,
      thursdayslots0900am: this.thursdayslots0900am,
      thursdayslots0930am: this.thursdayslots0930am,
      thursdayslots1000am: this.thursdayslots1000am,
      thursdayslots1030am: this.thursdayslots1030am,
      thursdayslots1100am: this.thursdayslots1100am,
      thursdayslots1130am: this.thursdayslots1130am,
      thursdayslots1200pm: this.thursdayslots1200pm,
      thursdayslots1230pm: this.thursdayslots1230pm,
      thursdayslots0100pm: this.thursdayslots0100pm,
      thursdayslots0130pm: this.thursdayslots0130pm,
      thursdayslots0200pm: this.thursdayslots0200pm,
      thursdayslots0230pm: this.thursdayslots0230pm,
      thursdayslots0300pm: this.thursdayslots0300pm,
      thursdayslots0330pm: this.thursdayslots0330pm,
      thursdayslots0400pm: this.thursdayslots0400pm,
      thursdayslots0430pm: this.thursdayslots0430pm,
      thursdayslots0500pm: this.thursdayslots0500pm,
      fridayslots0800am: this.fridayslots0800am,
      fridayslots0830am: this.fridayslots0830am,
      fridayslots0900am: this.fridayslots0900am,
      fridayslots0930am: this.fridayslots0930am,
      fridayslots1000am: this.fridayslots1000am,
      fridayslots1030am: this.fridayslots1030am,
      fridayslots1100am: this.fridayslots1100am,
      fridayslots1130am: this.fridayslots1130am,
      fridayslots1200pm: this.fridayslots1200pm,
      fridayslots1230pm: this.fridayslots1230pm,
      fridayslots0100pm:  this.fridayslots0100pm,
      fridayslots0130pm: this.fridayslots0130pm,
      fridayslots0200pm: this.fridayslots0200pm,
      fridayslots0230pm: this.fridayslots0230pm,
      fridayslots0300pm: this.fridayslots0300pm,
      fridayslots0330pm: this.fridayslots0330pm,
      fridayslots0400pm: this.fridayslots0400pm,
      fridayslots0430pm: this.fridayslots0430pm,
      fridayslots0500pm: this.fridayslots0500pm,
      saturdayslots0800am: this.saturdayslots0800am,
      saturdayslots0830am: this.saturdayslots0830am,
      saturdayslots0900am: this.saturdayslots0900am,
      saturdayslots0930am: this.saturdayslots0930am,
      saturdayslots1000am: this.saturdayslots1000am,
      saturdayslots1030am: this.saturdayslots1030am,
      saturdayslots1100am: this.saturdayslots1100am,
      saturdayslots1130am: this.saturdayslots1130am,
      saturdayslots1200pm: this.saturdayslots1200pm,
      saturdayslots1230pm: this.saturdayslots1230pm,
      saturdayslots0100pm:  this.saturdayslots0100pm,
      saturdayslots0130pm: this.saturdayslots0130pm,
      saturdayslots0200pm: this.saturdayslots0200pm,
      saturdayslots0230pm: this.saturdayslots0230pm,
      saturdayslots0300pm: this.saturdayslots0300pm,
      saturdayslots0330pm: this.saturdayslots0330pm,
      saturdayslots0400pm: this.saturdayslots0400pm,
      saturdayslots0430pm: this.saturdayslots0430pm,
      saturdayslots0500pm: this.saturdayslots0500pm,
      sundayslots0800am: this.sundayslots0800am,
      sundayslots0830am: this.sundayslots0830am,
      sundayslots0900am: this.sundayslots0900am,
      sundayslots0930am: this.sundayslots0930am,
      sundayslots1000am: this.sundayslots1000am,
      sundayslots1030am: this.sundayslots1030am,
      sundayslots1100am: this.sundayslots1100am,
      sundayslots1130am: this.sundayslots1130am,
      sundayslots1200pm: this.sundayslots1200pm,
      sundayslots1230pm: this.sundayslots1230pm,
      sundayslots0100pm: this.sundayslots0100pm,
      sundayslots0130pm: this.sundayslots0130pm,
      sundayslots0200pm: this.sundayslots0200pm,
      sundayslots0230pm: this.sundayslots0230pm,
      sundayslots0300pm: this.sundayslots0300pm,
      sundayslots0330pm: this.sundayslots0330pm,
      sundayslots0400pm: this.sundayslots0400pm,
      sundayslots0430pm: this.sundayslots0430pm,
      sundayslots0500pm: this.sundayslots0500pm,
  
    }

    //Update User
   this.authService.signupConsultTime(_ctdoctor).subscribe(data =>{
    console.log(_ctdoctor);
 
   
   this._flashMessagesService.show('Your online consultation service has been enabled.', {cssClass:'alert-success', timeout: 3000}); 
 });  
  
 }
 


}
