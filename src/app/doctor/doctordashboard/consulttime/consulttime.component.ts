import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { FormGroup, FormControl, Validators,  FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulttime',
  templateUrl: './consulttime.component.html',
  styleUrls: ['./consulttime.component.sass']
})
export class ConsulttimeComponent implements OnInit {
  
  
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
  
   this.authService.getDoctorConsultTimeProfile().subscribe(ctprofile =>{
    this.ctdoctor = ctprofile.user;
    console.log(this.ctdoctor);
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

checkValueMon0800am(mondayslots0800am: any){
  mondayslots0800am = !mondayslots0800am;
}
checkValueMon0830am(mondayslots0830am: any){
  mondayslots0830am = !mondayslots0830am;
}
checkValueMon0900am(mondayslots0900am: any){
  mondayslots0900am = !mondayslots0900am;
}
checkValueMon0930am(mondayslots0930am: any){
  mondayslots0930am = !mondayslots0930am;
}
checkValueMon1000am(mondayslots1000am: any){
  mondayslots1000am = !mondayslots1000am;
}
checkValueMon1030am(mondayslots1030am: any){
  mondayslots1030am = !mondayslots1030am;
}
checkValueMon1100am(mondayslots1100am: any){
  mondayslots1100am = !mondayslots1100am;
}
checkValueMon1130am(mondayslots1130am: any){
  mondayslots1130am = !mondayslots1130am;
}
checkValueMon1200pm(mondayslots1200pm: any){
  mondayslots1200pm = !mondayslots1200pm;
}
checkValueMon1230pm(mondayslots1230pm: any){
  mondayslots1230pm = !mondayslots1230pm;
}
checkValueMon0100pm(mondayslots0100pm: any){
  mondayslots0100pm = !mondayslots0100pm;
}
checkValueMon0130pm(mondayslots0130pm: any){
  mondayslots0130pm = !mondayslots0130pm;
}
checkValueMon0200pm(mondayslots0200pm: any){
  mondayslots0200pm = !mondayslots0200pm;
}
checkValueMon0230pm(mondayslots0230pm: any){
  mondayslots0230pm = !mondayslots0230pm;
}
checkValueMon0300pm(mondayslots0300pm: any){
  mondayslots0300pm = !mondayslots0300pm;
}
checkValueMon0330pm(mondayslots0330pm: any){
  mondayslots0330pm = !mondayslots0330pm;
}
checkValueMon0400pm(mondayslots0400pm: any){
  mondayslots0400pm = !mondayslots0400pm;
}
checkValueMon0430pm(mondayslots0430pm: any){
  mondayslots0430pm = !mondayslots0430pm;
}
checkValueMon0500pm(mondayslots0500pm: any){
  mondayslots0500pm = !mondayslots0500pm;
}

checkValueTues0800am(tuesdayslots0800am: any){
  tuesdayslots0800am = !tuesdayslots0800am;
}
checkValueTues0830am(tuesdayslots0830am: any){
  tuesdayslots0830am = !tuesdayslots0830am;
}
checkValueTues0900am(tuesdayslots0900am: any){
  tuesdayslots0900am = !tuesdayslots0900am;
}
checkValueTues0930am(tuesdayslots0930am: any){
  tuesdayslots0930am = !tuesdayslots0930am;
}
checkValueTues1000am(tuesdayslots1000am: any){
  tuesdayslots1000am = !tuesdayslots1000am;
}
checkValueTues1030am(tuesdayslots1030am: any){
  tuesdayslots1030am = !tuesdayslots1030am;
}
checkValueTues1100am(tuesdayslots1100am: any){
  tuesdayslots1100am = !tuesdayslots1100am;
}
checkValueTues1130am(tuesdayslots1130am: any){
  tuesdayslots1130am = !tuesdayslots1130am;
}
checkValueTues1200pm(tuesdayslots1200pm: any){
  tuesdayslots1200pm = !tuesdayslots1200pm;
}
checkValueTues1230pm(tuesdayslots1230pm: any){
  tuesdayslots1230pm = !tuesdayslots1230pm;
}
checkValueTues0100pm(tuesdayslots0100pm: any){
  tuesdayslots0100pm = !tuesdayslots0100pm;
}
checkValueTues0130pm(tuesdayslots0130pm: any){
  tuesdayslots0130pm = !tuesdayslots0130pm;
}
checkValueTues0200pm(tuesdayslots0200pm: any){
  tuesdayslots0200pm = !tuesdayslots0200pm;
}
checkValueTues0230pm(tuesdayslots0230pm: any){
  tuesdayslots0230pm = !tuesdayslots0230pm;
}
checkValueTues0300pm(tuesdayslots0300pm: any){
  tuesdayslots0300pm = !tuesdayslots0300pm;
}
checkValueTues0330pm(tuesdayslots0330pm: any){
  tuesdayslots0330pm = !tuesdayslots0330pm;
}
checkValueTues0400pm(tuesdayslots0400pm: any){
  tuesdayslots0400pm = !tuesdayslots0400pm;
}
checkValueTues0430pm(tuesdayslots0430pm: any){
  tuesdayslots0430pm = !tuesdayslots0430pm;
}
checkValueTues0500pm(tuesdayslots0500pm: any){
  tuesdayslots0500pm = !tuesdayslots0500pm;
}

checkValueWednes0800am(wednesdayslots0800am: any){
  wednesdayslots0800am = !wednesdayslots0800am;
}
checkValueWednes0830am(wednesdayslots0830am: any){
  wednesdayslots0830am = !wednesdayslots0830am;
}
checkValueWednes0900am(wednesdayslots0900am: any){
  wednesdayslots0900am = !wednesdayslots0900am;
}
checkValueWednes0930am(wednesdayslots0930am: any){
  wednesdayslots0930am = !wednesdayslots0930am;
}
checkValueWednes1000am(wednesdayslots1000am: any){
  wednesdayslots1000am = !wednesdayslots1000am;
}
checkValueWednes1030am(wednesdayslots1030am: any){
  wednesdayslots1030am = !wednesdayslots1030am;
}
checkValueWednes1100am(wednesdayslots1100am: any){
  wednesdayslots1100am = !wednesdayslots1100am;
}
checkValueWednes1130am(wednesdayslots1130am: any){
  wednesdayslots1130am = !wednesdayslots1130am;
}
checkValueWednes1200pm(wednesdayslots1200pm: any){
  wednesdayslots1200pm = !wednesdayslots1200pm;
}
checkValueWednes1230pm(wednesdayslots1230pm: any){
  wednesdayslots1230pm = !wednesdayslots1230pm;
}
checkValueWednes0100pm(wednesdayslots0100pm: any){
  wednesdayslots0100pm = !wednesdayslots0100pm;
}
checkValueWednes0130pm(wednesdayslots0130pm: any){
  wednesdayslots0130pm = !wednesdayslots0130pm;
}
checkValueWednes0200pm(wednesdayslots0200pm: any){
  wednesdayslots0200pm = !wednesdayslots0200pm;
}
checkValueWednes0230pm(wednesdayslots0230pm: any){
  wednesdayslots0230pm = !wednesdayslots0230pm;
}
checkValueWednes0300pm(wednesdayslots0300pm: any){
  wednesdayslots0300pm = !wednesdayslots0300pm;
}
checkValueWednes0330pm(wednesdayslots0330pm: any){
  wednesdayslots0330pm = !wednesdayslots0330pm;
}
checkValueWednes0400pm(wednesdayslots0400pm: any){
  wednesdayslots0400pm = !wednesdayslots0400pm;
}
checkValueWednes0430pm(wednesdayslots0430pm: any){
  wednesdayslots0430pm = !wednesdayslots0430pm;
}
checkValueWednes0500pm(wednesdayslots0500pm: any){
  wednesdayslots0500pm = !wednesdayslots0500pm;
}

checkValueThurs0800am(thursdayslots0800am: any){
  thursdayslots0800am = !thursdayslots0800am;
}
checkValueThurs0830am(thursdayslots0830am: any){
  thursdayslots0830am = !thursdayslots0830am;
}
checkValueThurs0900am(thursdayslots0900am: any){
  thursdayslots0900am = !thursdayslots0900am;
}
checkValueThurs0930am(thursdayslots0930am: any){
  thursdayslots0930am = !thursdayslots0930am;
}
checkValueThurs1000am(thursdayslots1000am: any){
  thursdayslots1000am = !thursdayslots1000am;
}
checkValueThurs1030am(thursdayslots1030am: any){
  thursdayslots1030am = !thursdayslots1030am;
}
checkValueThurs1100am(thursdayslots1100am: any){
  thursdayslots1100am = !thursdayslots1100am;
}
checkValueThurs1130am(thursdayslots1130am: any){
  thursdayslots1130am = !thursdayslots1130am;
}
checkValueThurs1200pm(thursdayslots1200pm: any){
  thursdayslots1200pm = !thursdayslots1200pm;
}
checkValueThurs1230pm(thursdayslots1230pm: any){
  thursdayslots1230pm = !thursdayslots1230pm;
}
checkValueThurs0100pm(thursdayslots0100pm: any){
  thursdayslots0100pm = !thursdayslots0100pm;
}
checkValueThurs0130pm(thursdayslots0130pm: any){
  thursdayslots0130pm = !thursdayslots0130pm;
}
checkValueThurs0200pm(thursdayslots0200pm: any){
  thursdayslots0200pm = !thursdayslots0200pm;
}
checkValueThurs0230pm(thursdayslots0230pm: any){
  thursdayslots0230pm = !thursdayslots0230pm;
}
checkValueThurs0300pm(thursdayslots0300pm: any){
  thursdayslots0300pm = !thursdayslots0300pm;
}
checkValueThurs0330pm(thursdayslots0330pm: any){
  thursdayslots0330pm = !thursdayslots0330pm;
}
checkValueThurs0400pm(thursdayslots0400pm: any){
  thursdayslots0400pm = !thursdayslots0400pm;
}
checkValueThurs0430pm(thursdayslots0430pm: any){
  thursdayslots0430pm = !thursdayslots0430pm;
}
checkValueThurs0500pm(thursdayslots0500pm: any){
  thursdayslots0500pm = !thursdayslots0500pm;
}

checkValueFri0800am(fridayslots0800am: any){
  fridayslots0800am = !fridayslots0800am;
}
checkValueFri0830am(fridayslots0830am: any){
  fridayslots0830am = !fridayslots0830am;
}
checkValueFri0900am(fridayslots0900am: any){
  fridayslots0900am = !fridayslots0900am;
}
checkValueFri0930am(fridayslots0930am: any){
  fridayslots0930am = !fridayslots0930am;
}
checkValueFri1000am(fridayslots1000am: any){
  fridayslots1000am = !fridayslots1000am;
}
checkValueFri1030am(fridayslots1030am: any){
  fridayslots1030am = !fridayslots1030am;
}
checkValueFri1100am(fridayslots1100am: any){
  fridayslots1100am = !fridayslots1100am;
}
checkValueFri1130am(fridayslots1130am: any){
  fridayslots1130am = !fridayslots1130am;
}
checkValueFri1200pm(fridayslots1200pm: any){
  fridayslots1200pm = !fridayslots1200pm;
}
checkValueFri1230pm(fridayslots1230pm: any){
  fridayslots1230pm = !fridayslots1230pm;
}
checkValueFri0100pm(fridayslots0100pm: any){
  fridayslots0100pm = !fridayslots0100pm;
}
checkValueFri0130pm(fridayslots0130pm: any){
  fridayslots0130pm = !fridayslots0130pm;
}
checkValueFri0200pm(fridayslots0200pm: any){
  fridayslots0200pm = !fridayslots0200pm;
}
checkValueFri0230pm(fridayslots0230pm: any){
  fridayslots0230pm = !fridayslots0230pm;
}
checkValueFri0300pm(fridayslots0300pm: any){
  fridayslots0300pm = !fridayslots0300pm;
}
checkValueFri0330pm(fridayslots0330pm: any){
  fridayslots0330pm = !fridayslots0330pm;
}
checkValueFri0400pm(fridayslots0400pm: any){
  fridayslots0400pm = !fridayslots0400pm;
}
checkValueFri0430pm(fridayslots0430pm: any){
  fridayslots0430pm = !fridayslots0430pm;
}
checkValueFri0500pm(fridayslots0500pm: any){
  fridayslots0500pm = !fridayslots0500pm;
}

checkValueSatur0800am(saturdayslots0800am: any){
  saturdayslots0800am = !saturdayslots0800am;
}
checkValueSatur0830am(saturdayslots0830am: any){
  saturdayslots0830am = !saturdayslots0830am;
}
checkValueSatur0900am(saturdayslots0900am: any){
  saturdayslots0900am = !saturdayslots0900am;
}
checkValueSatur1000am(saturdayslots1000am: any){
  saturdayslots1000am = !saturdayslots1000am;
}
checkValueSatur0930am(saturdayslots0930am: any){
  saturdayslots0930am = !saturdayslots0930am;
}
checkValueSatur1030am(saturdayslots1030am: any){
  saturdayslots1030am = !saturdayslots1030am;
}
checkValueSatur1100am(saturdayslots1100am: any){
  saturdayslots1100am = !saturdayslots1100am;
}
checkValueSatur1130am(saturdayslots1130am: any){
  saturdayslots1130am = !saturdayslots1130am;
}
checkValueSatur1200pm(saturdayslots1200pm: any){
  saturdayslots1200pm = !saturdayslots1200pm;
}
checkValueSatur1230pm(saturdayslots1230pm: any){
  saturdayslots1230pm = !saturdayslots1230pm;
}
checkValueSatur0100pm(saturdayslots0100pm: any){
  saturdayslots0100pm = !saturdayslots0100pm;
}
checkValueSatur0130pm(saturdayslots0130pm: any){
  saturdayslots0130pm = !saturdayslots0130pm;
}
checkValueSatur0200pm(saturdayslots0200pm: any){
  saturdayslots0200pm = !saturdayslots0200pm;
}
checkValueSatur0230pm(saturdayslots0230pm: any){
  saturdayslots0230pm = !saturdayslots0230pm;
}
checkValueSatur0300pm(saturdayslots0300pm: any){
  saturdayslots0300pm = !saturdayslots0300pm;
}
checkValueSatur0330pm(saturdayslots0330pm: any){
  saturdayslots0330pm = !saturdayslots0330pm;
}
checkValueSatur0400pm(saturdayslots0400pm: any){
  saturdayslots0400pm = !saturdayslots0400pm;
}
checkValueSatur0430pm(saturdayslots0430pm: any){
  saturdayslots0430pm = !saturdayslots0430pm;
}
checkValueSatur0500pm(saturdayslots0500pm: any){
  saturdayslots0500pm = !saturdayslots0500pm;
}

checkValueSun0800am(sundayslots0800am: any){
  sundayslots0800am = !sundayslots0800am;
}
checkValueSun0830am(sundayslots0830am: any){
  sundayslots0830am = !sundayslots0830am;
}
checkValueSun0900am(sundayslots0900am: any){
  sundayslots0900am = !sundayslots0900am;
}
checkValueSun0930am(sundayslots0930am: any){
  sundayslots0930am = !sundayslots0930am;
}
checkValueSun1000am(sundayslots1000am: any){
  sundayslots1000am = !sundayslots1000am;
}
checkValueSun1030am(sundayslots1030am: any){
  sundayslots1030am = !sundayslots1030am;
}
checkValueSun1100am(sundayslots1100am: any){
  sundayslots1100am = !sundayslots1100am;
}
checkValueSun1130am(sundayslots1130am: any){
  sundayslots1130am = !sundayslots1130am;
}
checkValueSun1200pm(sundayslots1200pm: any){
  sundayslots1200pm = !sundayslots1200pm;
}
checkValueSun1230pm(sundayslots1230pm: any){
  sundayslots1230pm = !sundayslots1230pm;
}
checkValueSun0100pm(sundayslots0100pm: any){
  sundayslots0100pm = !sundayslots0100pm;
}
checkValueSun0130pm(sundayslots0130pm: any){
  sundayslots0130pm = !sundayslots0130pm;
}
checkValueSun0200pm(sundayslots0200pm: any){
  sundayslots0200pm = !sundayslots0200pm;
}
checkValueSun0230pm(sundayslots0230pm: any){
  sundayslots0230pm = !sundayslots0230pm;
}
checkValueSun0300pm(sundayslots0300pm: any){
  sundayslots0300pm = !sundayslots0300pm;
}
checkValueSun0330pm(sundayslots0330pm: any){
  sundayslots0330pm = !sundayslots0330pm;
}
checkValueSun0400pm(sundayslots0400pm: any){
  sundayslots0400pm = !sundayslots0400pm;
}
checkValueSun0430pm(sundayslots0430pm: any){
  sundayslots0430pm = !sundayslots0430pm;
}
checkValueSun0500pm(sundayslots0500pm: any){
  sundayslots0500pm = !sundayslots0500pm;
}

onEditConsultSubmit(consulttime){

    var _ctdoctor = {
      _id : consulttime._id,
      mondayslots0800am: consulttime.mondayslots0800am,
      mondayslots0830am: consulttime.mondayslots0830am,
      mondayslots0900am: consulttime.mondayslots0900am,
      mondayslots0930am: consulttime.mondayslots0930am,
      mondayslots1000am: consulttime.mondayslots1000am,
      mondayslots1030am: consulttime.mondayslots1030am,
      mondayslots1100am: consulttime.mondayslots1100am,
      mondayslots1130am: consulttime.mondayslots1130am,
      mondayslots1200pm: consulttime.mondayslots1200pm,
      mondayslots1230pm: consulttime.mondayslots1230pm,
      mondayslots0100pm:  consulttime.mondayslots0100pm,
      mondayslots0130pm: consulttime.mondayslots0130pm,
      mondayslots0200pm: consulttime.mondayslots0200pm,
      mondayslots0230pm: consulttime.mondayslots0230pm,
      mondayslots0300pm: consulttime.mondayslots0300pm,
      mondayslots0330pm: consulttime.mondayslots0330pm,
      mondayslots0400pm: consulttime.mondayslots0400pm,
      mondayslots0430pm: consulttime.mondayslots0430pm,
      mondayslots0500pm: consulttime.mondayslots0500pm,
      tuesdayslots0800am: consulttime.tuesdayslots0800am,
      tuesdayslots0830am: consulttime.tuesdayslots0830am,
      tuesdayslots0900am: consulttime.tuesdayslots0900am,
      tuesdayslots0930am: consulttime.tuesdayslots0930am,
      tuesdayslots1000am: consulttime.tuesdayslots1000am,
      tuesdayslots1030am: consulttime.tuesdayslots1030am,
      tuesdayslots1100am: consulttime.tuesdayslots1100am,
      tuesdayslots1130am: consulttime.tuesdayslots1130am,
      tuesdayslots1200pm: consulttime.tuesdayslots1200pm,
      tuesdayslots1230pm: consulttime.tuesdayslots1230pm,
      tuesdayslots0100pm:  consulttime.tuesdayslots0100pm,
      tuesdayslots0130pm: consulttime.tuesdayslots0130pm,
      tuesdayslots0200pm: consulttime.tuesdayslots0200pm,
      tuesdayslots0230pm: consulttime.tuesdayslots0230pm,
      tuesdayslots0300pm: consulttime.tuesdayslots0300pm,
      tuesdayslots0330pm: consulttime.tuesdayslots0330pm,
      tuesdayslots0400pm: consulttime.tuesdayslots0400pm,
      tuesdayslots0430pm: consulttime.tuesdayslots0430pm,
      tuesdayslots0500pm: consulttime.tuesdayslots0500pm,
      wednesdayslots0800am: consulttime.wednesdayslots0800am,
      wednesdayslots0830am: consulttime.wednesdayslots0830am,
      wednesdayslots0900am: consulttime.wednesdayslots0900am,
      wednesdayslots0930am: consulttime.wednesdayslots0930am,
      wednesdayslots1000am: consulttime.wednesdayslots1000am,
      wednesdayslots1030am: consulttime.wednesdayslots1030am,
      wednesdayslots1100am: consulttime.wednesdayslots1100am,
      wednesdayslots1130am: consulttime.wednesdayslots1130am,
      wednesdayslots1200pm: consulttime.wednesdayslots1200pm,
      wednesdayslots1230pm: consulttime.wednesdayslots1230pm,
      wednesdayslots0100pm:  consulttime.wednesdayslots0100pm,
      wednesdayslots0130pm: consulttime.wednesdayslots0130pm,
      wednesdayslots0200pm: consulttime.wednesdayslots0200pm,
      wednesdayslots0230pm: consulttime.wednesdayslots0230pm,
      wednesdayslots0300pm: consulttime.wednesdayslots0300pm,
      wednesdayslots0330pm: consulttime.wednesdayslots0330pm,
      wednesdayslots0400pm: consulttime.wednesdayslots0400pm,
      wednesdayslots0430pm: consulttime.wednesdayslots0430pm,
      wednesdayslots0500pm: consulttime.wednesdayslots0500pm,
      thursdayslots0800am: consulttime.thursdayslots0800am,
      thursdayslots0830am: consulttime.thursdayslots0830am,
      thursdayslots0900am: consulttime.thursdayslots0900am,
      thursdayslots0930am: consulttime.thursdayslots0930am,
      thursdayslots1000am: consulttime.thursdayslots1000am,
      thursdayslots1030am: consulttime.thursdayslots1030am,
      thursdayslots1100am: consulttime.thursdayslots1100am,
      thursdayslots1130am: consulttime.thursdayslots1130am,
      thursdayslots1200pm: consulttime.thursdayslots1200pm,
      thursdayslots1230pm: consulttime.thursdayslots1230pm,
      thursdayslots0100pm:  consulttime.thursdayslots0100pm,
      thursdayslots0130pm: consulttime.thursdayslots0130pm,
      thursdayslots0200pm: consulttime.thursdayslots0200pm,
      thursdayslots0230pm: consulttime.thursdayslots0230pm,
      thursdayslots0300pm: consulttime.thursdayslots0300pm,
      thursdayslots0330pm: consulttime.thursdayslots0330pm,
      thursdayslots0400pm: consulttime.thursdayslots0400pm,
      thursdayslots0430pm: consulttime.thursdayslots0430pm,
      thursdayslots0500pm: consulttime.thursdayslots0500pm,
      fridayslots0800am: consulttime.fridayslots0800am,
      fridayslots0830am: consulttime.fridayslots0830am,
      fridayslots0900am: consulttime.fridayslots0900am,
      fridayslots0930am: consulttime.fridayslots0930am,
      fridayslots1000am: consulttime.fridayslots1000am,
      fridayslots1030am: consulttime.fridayslots1030am,
      fridayslots1100am: consulttime.fridayslots1100am,
      fridayslots1130am: consulttime.fridayslots1130am,
      fridayslots1200pm: consulttime.fridayslots1200pm,
      fridayslots1230pm: consulttime.fridayslots1230pm,
      fridayslots0100pm: consulttime.fridayslots0100pm,
      fridayslots0130pm: consulttime.fridayslots0130pm,
      fridayslots0200pm: consulttime.fridayslots0200pm,
      fridayslots0230pm: consulttime.fridayslots0230pm,
      fridayslots0300pm: consulttime.fridayslots0300pm,
      fridayslots0330pm: consulttime.fridayslots0330pm,
      fridayslots0400pm: consulttime.fridayslots0400pm,
      fridayslots0430pm: consulttime.fridayslots0430pm,
      fridayslots0500pm: consulttime.fridayslots0500pm,
      saturdayslots0800am: consulttime.saturdayslots0800am,
      saturdayslots0830am: consulttime.saturdayslots0830am,
      saturdayslots0900am: consulttime.saturdayslots0900am,
      saturdayslots0930am: consulttime.saturdayslots0930am,
      saturdayslots1000am: consulttime.saturdayslots1000am,
      saturdayslots1030am: consulttime.saturdayslots1030am,
      saturdayslots1100am: consulttime.saturdayslots1100am,
      saturdayslots1130am: consulttime.saturdayslots1130am,
      saturdayslots1200pm: consulttime.saturdayslots1200pm,
      saturdayslots1230pm: consulttime.saturdayslots1230pm,
      saturdayslots0100pm:  consulttime.saturdayslots0100pm,
      saturdayslots0130pm: consulttime.saturdayslots0130pm,
      saturdayslots0200pm: consulttime.saturdayslots0200pm,
      saturdayslots0230pm: consulttime.saturdayslots0230pm,
      saturdayslots0300pm: consulttime.saturdayslots0300pm,
      saturdayslots0330pm: consulttime.saturdayslots0330pm,
      saturdayslots0400pm: consulttime.saturdayslots0400pm,
      saturdayslots0430pm: consulttime.saturdayslots0430pm,
      saturdayslots0500pm: consulttime.saturdayslots0500pm,
      sundayslots0800am: consulttime.sundayslots0800am,
      sundayslots0830am: consulttime.sundayslots0830am,
      sundayslots0900am: consulttime.sundayslots0900am,
      sundayslots0930am: consulttime.sundayslots0930am,
      sundayslots1000am: consulttime.sundayslots1000am,
      sundayslots1030am: consulttime.sundayslots1030am,
      sundayslots1100am: consulttime.sundayslots1100am,
      sundayslots1130am: consulttime.sundayslots1130am,
      sundayslots1200pm: consulttime.sundayslots1200pm,
      sundayslots1230pm: consulttime.sundayslots1230pm,
      sundayslots0100pm: consulttime.sundayslots0100pm,
      sundayslots0130pm: consulttime.sundayslots0130pm,
      sundayslots0200pm: consulttime.sundayslots0200pm,
      sundayslots0230pm: consulttime.sundayslots0230pm,
      sundayslots0300pm: consulttime.sundayslots0300pm,
      sundayslots0330pm: consulttime.sundayslots0330pm,
      sundayslots0400pm: consulttime.sundayslots0400pm,
      sundayslots0430pm: consulttime.sundayslots0430pm,
      sundayslots0500pm: consulttime.sundayslots0500pm,
   
    }

    //Update User
   this.authService.updateConsultTime(_ctdoctor).subscribe(data =>{
    console.log(_ctdoctor);
    console.log(consulttime.mondayslots0800am);
   this._flashMessagesService.show('Your changes have been saved', {cssClass:'alert-success', timeout: 3000}); 
 });  
  
 }
 


}
