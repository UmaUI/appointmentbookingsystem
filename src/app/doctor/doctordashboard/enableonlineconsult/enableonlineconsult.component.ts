import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { FormGroup, FormControl, Validators,  FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
//import { Monday }  from '../../../../../models/monday';
//import { Tuesday }  from '../../../../../models/tuesday';
//import { Wednesday }  from '../../../../../models/wednesday';
//import { Thursday }  from '../../../../../models/thursday';
//import { Friday }  from '../../../../../models/friday';
//import { Saturday }  from '../../../../../models/saturday';
//import { Sunday }  from '../../../../../models/sunday';

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
  //monday: any;
  //ctmonday: Array<boolean>; 
  
  // m2: any; m3: any; m4: any; m5: any; m6: any; m7: any; m8: any; m9: any; m10: any; m11: any; m12: any; m13: any; m14: any; m15: any; m16: any; m17: any; m18: any;
  //t1: any; t2: any; t3: any; t4: any; t5: any; t6: any; t7: any; t8: any; t9: any; t10: any; t11: any; t12: any; t13: any; t14: any; t15: any; t16: any; t17: any; t18: any;
  //w1: any; w2: any; w3: any; w4: any; w5: any; w6: any; w7: any; w8: any; w9: any; w10: any; w11: any; w12: any; w13: any; w14: any; w15: any; w16: any; w17: any; w18: any;
  //th1: any; th2: any; th3: any; th4: any; th5: any; th6: any; th7: any; th8: any; th9: any; th10: any; th11: any; th12: any; th13: any; th14: any; th15: any; th16: any; th17: any; th18: any;
  //f1: any; f2: any; f3: any; f4: any; f5: any; f6: any; f7: any; f8: any; f9: any; f10: any; f11: any; f12: any; f13: any; f14: any; f15: any; f16: any; f17: any; f18: any;
  //s1: any; s2: any; s3: any; s4: any; s5: any; s6: any; s7: any; s8: any; s9: any; s10: any; s11: any; s12: any; s13: any; s14: any; s15: any; s16: any; s17: any; s18: any;
  //su1: any; su2: any; su3: any; su4: any; su5: any; su6: any; su7: any; su8: any; su9: any; su10: any; su11: any; su12: any; su13: any; su14: any; su15: any; su16: any; su17: any; su18: any;
  //monday:Monday[];
  //tuesday:Tuesday[];
  //wednesday:Wednesday[];
  //thursday:Thursday[];
  //friday:Friday[];
  //saturday:Saturday[];
  //sunday:Sunday[];
  //mondays: any[] = [];
  //monday: Array<{m1: Boolean, m2: Boolean, m3: Boolean, m4: Boolean, m5: Boolean, m6: Boolean, m7: Boolean, m8: Boolean, m9: Boolean, m10: Boolean, m11: Boolean, m12: Boolean, m13: Boolean, m14: Boolean, m15: Boolean, m16: Boolean, m17: Boolean, m18: Boolean}>;
  //tuesday: Array<{t1: Boolean, t2: Boolean, t3: Boolean, t4: Boolean, t5: Boolean, t6: Boolean, t7: Boolean, t8: Boolean, t9: Boolean, t10: Boolean, t11: Boolean, t12: Boolean, t13: Boolean, t14: Boolean, t15: Boolean, t16: Boolean, t17: Boolean, t18: Boolean}>;
  //wednesday: Array<{w1: Boolean, w2: Boolean, w3: Boolean, w4: Boolean, w5: Boolean, w6: Boolean, w7: Boolean, w8: Boolean, w9: Boolean, w10: Boolean, w11: Boolean, w12: Boolean, w13: Boolean, w14: Boolean, w15: Boolean, w16: Boolean, w17: Boolean, w18: Boolean}>;
  //thursday: Array<{th1: Boolean, th2: Boolean, th3: Boolean, th4: Boolean, th5: Boolean, th6: Boolean, th7: Boolean, th8: Boolean, th9: Boolean, th10: Boolean, th11: Boolean, th12: Boolean, th13: Boolean, th14: Boolean, th15: Boolean, th16: Boolean, th17: Boolean, th18: Boolean}>;
  //friday: Array<{f1: Boolean, f2: Boolean, f3: Boolean, f4: Boolean, f5: Boolean, f6: Boolean, f7: Boolean, m8: Boolean, m9: Boolean, m10: Boolean, m11: Boolean, m12: Boolean, m13: Boolean, m14: Boolean, m15: Boolean, m16: Boolean, m17: Boolean, m18: Boolean}>;
  //saturday: Array<{s1: Boolean, s2: Boolean, s3: Boolean, s4: Boolean, s5: Boolean, s6: Boolean, s7: Boolean, s8: Boolean, s9: Boolean, s10: Boolean, s11: Boolean, s12: Boolean, s13: Boolean, s14: Boolean, s15: Boolean, s16: Boolean, s17: Boolean, s18: Boolean}>;
  //sunday: Array<{su1: Boolean, su2: Boolean, su3: Boolean, su4: Boolean, su5: Boolean, su6: Boolean, su7: Boolean, su8: Boolean, su9: Boolean, su10: Boolean, su11: Boolean, su12: Boolean, su13: Boolean, su14: Boolean, su15: Boolean, su16: Boolean, su17: Boolean, su18: Boolean}>;
  
  
  
  //monday: any[] = [];
  //tuesday: any[] = [];
  //wednesday: any[] = [];
  //thursday: any[] = [];
  //friday: any[] = [];
  //saturday: any[] = [];
  //sunday: any[] = [];

  constructor(
    fb: FormBuilder,
    private _flashMessagesService: FlashMessagesService, 
    private authService: authService,
    private router: Router
  ) { 

    this.consulttimeForm = fb.group({
     // mondays: fb.array([ this.createMonday() ])
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
     // monday: [],
    // tuesday: [],
    // wednesday: [],
    // thursday: [],
    // friday: [],
    // saturday: [],
    // sunday: [],
    });
  }

  ngOnInit() {
  
    //this.authService.getDoctorConsultTimeProfile().subscribe(profile =>{
      //this.ctdoctor = profile.user;
     // console.log(this.ctdoctor);
     // },
    // err =>{
    //   console.log(err);
    //   return false;
   //  }
   // );

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
  
  //createMonday(): FormGroup {
  //  return fb.  ({
  //    m1: '',
  //    m2: '',
  //    m3: ''
  //  });
 // }
 
   
    
    //consulttime.monday = this.consulttimeForm.get('monday') as FormArray;
    //consulttime.tuesday = this.consulttimeForm.get('tuesday') as FormArray;
    //consulttime.wednesday = this.consulttimeForm.get('wednesday') as FormArray;
    //consulttime.thursday = this.consulttimeForm.get('thursday') as FormArray;
    //consulttime.friday = this.consulttimeForm.get('friday') as FormArray;
    //consulttime.saturday = this.consulttimeForm.get('saturday') as FormArray;
    //consulttime.sunday = this.consulttimeForm.get('sunday') as FormArray;
    //this.mondays = this.consulttimeForm.get('mondays') as FormArray;
    //this.mondays.push(this.createItem());
    //var monday = [Monday[0].m1,Monday[0].m2,,"4"] 

 

  // Register User
  // this.authService.consulttimeDoctor(consulttime).subscribe(data =>{
     //console.log(user.profileimg);
    // if(data.success){
     // this._flashMessagesService.show('Your consultation time details were stored.', {cssClass: 'alert-success', timeout:3000});
      //this.router.navigate(['/login']);
      //this.router.navigateByUrl('/user/login');
      //this.NgZone.run(() => this.router.navigateByUrl('/user/login'));
    //}else{
     // this._flashMessagesService.show('Error in storing your consulttion time.', {cssClass: 'alert-danger', timeout:3000});
      //this.router.navigate(['/signup']);
     // this.router.navigateByUrl('/user/signup')
    // }
   //});
  //}
 // signInWithGoogle(): void {
//   this.AuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
//checkValue(mondayslots0800am: any){
  //mondayslots0800am = !mondayslots0800am;
  

  //console.log(mondayslots0800am);
//}

  onSignupConsultSubmit(consulttime){

     
    //var m1= false;
   // var ctmonday =new Array(18);
  
    //ctmonday[1]=false;
    //ctmonday[2]=false;
    //ctmonday[3]=false;
    //ctmonday[4]=false;
    //ctmonday[5]=false;
    //ctmonday[6]=false;
    //ctmonday[7]=false;
    //ctmonday[8]=false;
    //ctmonday[9]=false;
    //ctmonday[10]=false;
    //ctmonday[11]=false;
    //ctmonday[12]=false;
    //ctmonday[13]=false;
    //ctmonday[14]=false;
    //ctmonday[15]=false;
    //ctmonday[16]=false;
    //ctmonday[17]=false;

    //const monday = {
    //  m1: false, m2: false, m3: false, m4: false, m5: false, m6: false, m7: false, m8: false, m9: false, m10: false, m11: false, m12: false, m13: false, m14: false, m15: false, m16: false, m17: false, m18: false
    //  };
    //const tuesday = {
   //   t1: false, t2: false, t3: false, t4: false, t5: false, t6: false, t7: false, t8: false, t9: false, t10: false, t11: false, t12: false, t13: false, t14: false, t15: false, t16: false, t17: false, t18: false
   //   };
   // const wednesday = {
    //  w1: false, w2: false, w3: false, w4: false, w5: false, w6: false, w7: false, w8: false, w9: false, w10: false, w11: false, w12: false, w13: false, w14: false, w15: false, w16: false, w17: false, w18: false
    //  };
    //const thursday = {
    //  th1: false, th2: false, th3: false, th4: false, th5: false, th6: false, th7: false, th8: false, th9: false, th10: false, th11: false, th12: false, th13: false, th14: false, th15: false, th16: false, th17: false, th18: false
     // };
    //const friday = {
     // f1: false, f2: false, f3: false, f4: false, f5: false, f6: false, f7: false, f8: false, f9: false, f10: false, f11: false, f12: false, f13: false, f14: false, f15: false, f16: false, f17: false, f18: false
     // };
    //const saturday = {
     // sa1: false, sa2: false, sa3: false, sa4: false, sa5: false, sa6: false, sa7: false, sa8: false, sa9: false, sa10: false, sa11: false, sa12: false, sa13: false, sa14: false, sa15: false, sa16: false, sa17: false, sa18: false
     // };
    //const sunday = {
    //  s1: false, s2: false, s3: false, s4: false, s5: false, s6: false, s7: false, s8: false, s9: false, s10: false, s11: false, s12: false, s13: false, s14: false, s15: false, s16: false, s17: false, s18: false
    //  };

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
      // m1 : consulttime.m1,
      //monday : consulttime.monday,
      //monday: monday,
      //tuesday: tuesday,
      //wednesday: wednesday,
      //thursday: thursday,
      //friday: friday,
      //saturday: saturday,
      //sunday: sunday
    }

    //Update User
   this.authService.signupConsultTime(_ctdoctor).subscribe(data =>{
    console.log(_ctdoctor);
   // console.log(consulttime.mondayslots0800am);
   
   this._flashMessagesService.show('Your online consultation service has been enabled.', {cssClass:'alert-success', timeout: 3000}); 
 });  
  
 }
 


}
