import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { EditprofileComponent } from './user/dashboard/editprofile/editprofile.component';
import { EditpasswordComponent } from './user/dashboard/editpassword/editpassword.component';
import { BookappointmentComponent } from './user/dashboard/bookappointment/bookappointment.component';
import { PastappointmentComponent } from './user/dashboard/pastappointment/pastappointment.component';
import { UpcomimgappointmentComponent } from './user/dashboard/upcomimgappointment/upcomimgappointment.component';
import { VerifyComponent } from './user/verify/verify.component';
import { RetrieveComponent } from './user/retrieve/retrieve.component';
import { ResetpasswordComponent } from './user/resetpassword/resetpassword.component';
import { AuthGuard } from './guards/auth.guard';
import { AdvancedsearchComponent } from './advancedsearch/advancedsearch.component';
import { AdminsignupComponent } from './admin/adminsignup/adminsignup.component';
import { AdminverifyComponent } from './admin/adminverify/adminverify.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdmineditprofileComponent } from './admin/admindashboard/admineditprofile/admineditprofile.component';
import { AdmineditpasswordComponent } from './admin/admindashboard/admineditpassword/admineditpassword.component';
import { AdminretrieveComponent } from './admin/adminretrieve/adminretrieve.component';
import { AdminresetpasswordComponent } from './admin/adminresetpassword/adminresetpassword.component';
import { AdminadddoctorComponent } from './admin/admindashboard/adminadddoctor/adminadddoctor.component';
import { AdminviewdoctorslistComponent } from './admin/admindashboard/adminviewdoctorslist/adminviewdoctorslist.component';
import { AdminviewcustomerslistComponent } from './admin/admindashboard/adminviewcustomerslist/adminviewcustomerslist.component';
import { AdminviewappointmentslistComponent } from './admin/admindashboard/adminviewappointmentslist/adminviewappointmentslist.component';
import { AdminviewfeedbacksComponent } from './admin/admindashboard/adminviewfeedbacks/adminviewfeedbacks.component';
import { AdminallocatepidComponent } from './admin/admindashboard/adminallocatepid/adminallocatepid.component';
import { AdmineditcustomerpidComponent } from './admin/admindashboard/admineditcustomerpid/admineditcustomerpid.component';
import { AdmineditcustomerdetailsComponent } from './admin/admindashboard/admineditcustomerdetails/admineditcustomerdetails.component';
import { AdmineditcustomernameComponent } from './admin/admindashboard/admineditcustomername/admineditcustomername.component';
import { AdmineditcustomeremailComponent } from './admin/admindashboard/admineditcustomeremail/admineditcustomeremail.component';
import { AdmineditcustomermobilenoComponent } from './admin/admindashboard/admineditcustomermobileno/admineditcustomermobileno.component';
import { AdmineditcustomeraltermobilenoComponent } from './admin/admindashboard/admineditcustomeraltermobileno/admineditcustomeraltermobileno.component';
import { AdmineditcustomerusernameComponent } from './admin/admindashboard/admineditcustomerusername/admineditcustomerusername.component';
import { AdmineditcustomergenderComponent } from './admin/admindashboard/admineditcustomergender/admineditcustomergender.component';
import { AdmineditcustomerdateofbirthComponent } from './admin/admindashboard/admineditcustomerdateofbirth/admineditcustomerdateofbirth.component';
import { AdmineditcustomeractiveComponent } from './admin/admindashboard/admineditcustomeractive/admineditcustomeractive.component';
import { AdmineditcustomeraddressComponent } from './admin/admindashboard/admineditcustomeraddress/admineditcustomeraddress.component';
import { AdmineditcustomerprofileimgComponent } from './admin/admindashboard/admineditcustomerprofileimg/admineditcustomerprofileimg.component';
import { DoctordashboardComponent } from './doctor/doctordashboard/doctordashboard.component';
import { DoctorloginComponent } from './doctor/doctorlogin/doctorlogin.component';
import { DoctorresetpasswordComponent } from './doctor/doctorresetpassword/doctorresetpassword.component';
import { DoctorretrieveComponent } from './doctor/doctorretrieve/doctorretrieve.component';
import { DoctoreditprofileComponent } from './doctor/doctordashboard/doctoreditprofile/doctoreditprofile.component';
import { DoctoreditpasswordComponent } from './doctor/doctordashboard/doctoreditpassword/doctoreditpassword.component';
import { DoctorviewappointmentsComponent } from './doctor/doctordashboard/doctorviewappointments/doctorviewappointments.component';
import { DoctorviewcustomersComponent } from './doctor/doctordashboard/doctorviewcustomers/doctorviewcustomers.component';
import { AdmineditdoctordetailsComponent } from './admin/admindashboard/admineditdoctordetails/admineditdoctordetails.component';
import { AdmineditdoctorprofileimgComponent } from './admin/admindashboard/admineditdoctorprofileimg/admineditdoctorprofileimg.component';
import { AdmineditdoctornameComponent } from './admin/admindashboard/admineditdoctorname/admineditdoctorname.component';
import { AdmineditdoctoremailComponent } from './admin/admindashboard/admineditdoctoremail/admineditdoctoremail.component';
import { AdmineditdoctorspecialityComponent } from './admin/admindashboard/admineditdoctorspeciality/admineditdoctorspeciality.component';
import { AdmineditdoctormobilenoComponent } from './admin/admindashboard/admineditdoctormobileno/admineditdoctormobileno.component';
import { AdmineditdoctorusernameComponent } from './admin/admindashboard/admineditdoctorusername/admineditdoctorusername.component';
import { AdmineditdoctoraltermobilenoComponent } from './admin/admindashboard/admineditdoctoraltermobileno/admineditdoctoraltermobileno.component';
import { AdmineditdoctordateofbirthComponent } from './admin/admindashboard/admineditdoctordateofbirth/admineditdoctordateofbirth.component';
import { AdmineditdoctorgenderComponent } from './admin/admindashboard/admineditdoctorgender/admineditdoctorgender.component';
import { AdmineditdoctoraddressComponent } from './admin/admindashboard/admineditdoctoraddress/admineditdoctoraddress.component';
import { AdmineditdoctoractiveComponent } from './admin/admindashboard/admineditdoctoractive/admineditdoctoractive.component';
import { SearchComponent } from './search/search.component';
import { TopsearchComponent } from './topsearch/topsearch.component';
import { ConsulttimeComponent } from './doctor/doctordashboard/consulttime/consulttime.component';
import { EnableonlineconsultComponent } from './doctor/doctordashboard/enableonlineconsult/enableonlineconsult.component';
import { AdmineditdoctorconsulttimeComponent } from './admin/admindashboard/admineditdoctorconsulttime/admineditdoctorconsulttime.component';
import { AdmineditdoctorconsulttimeenableComponent } from './admin/admindashboard/admineditdoctorconsulttimeenable/admineditdoctorconsulttimeenable.component';
import { BookappointmentdoctorComponent } from './user/dashboard/bookappointmentdoctor/bookappointmentdoctor.component';
import { AdmincustomerpastappointmentsComponent } from './admin/admindashboard/admincustomerpastappointments/admincustomerpastappointments.component';
import { AdmincustomerupcomimgappointmentsComponent } from './admin/admindashboard/admincustomerupcomimgappointments/admincustomerupcomimgappointments.component';
import { AdmincustomerbookappointmentComponent } from './admin/admindashboard/admincustomerbookappointment/admincustomerbookappointment.component';
import { AdmincustomerbookappointmentsearchComponent } from './admin/admindashboard/admincustomerbookappointmentsearch/admincustomerbookappointmentsearch.component';
import { AdmineditappointmentdetailsComponent } from './admin/admindashboard/admineditappointmentdetails/admineditappointmentdetails.component';
import { AdmincustomerconsultmethodComponent } from './admin/admindashboard/admincustomerconsultmethod/admincustomerconsultmethod.component';
import { AdmincustomerpaytransidComponent } from './admin/admindashboard/admincustomerpaytransid/admincustomerpaytransid.component';
import { AdddoctordescriptionComponent } from './doctor/doctordashboard/adddoctordescription/adddoctordescription.component';
import { ViewdoctordescriptionComponent } from './user/dashboard/viewdoctordescription/viewdoctordescription.component';
import { AdmincustomerdoctordescriptionComponent } from './admin/admindashboard/admincustomerdoctordescription/admincustomerdoctordescription.component';
import { AdmincustomerupdatedoctordescriptionComponent } from './admin/admindashboard/admincustomerupdatedoctordescription/admincustomerupdatedoctordescription.component';
import { AdmindoctorpastappointmentsdetailsComponent } from './admin/admindashboard/admindoctorpastappointmentsdetails/admindoctorpastappointmentsdetails.component';
import { AdminupcomingappointmentsdetailsComponent } from './admin/admindashboard/adminupcomingappointmentsdetails/adminupcomingappointmentsdetails.component';
import { AddcustomerfeedbackComponent } from './user/dashboard/addcustomerfeedback/addcustomerfeedback.component';
import { ViewuserfeedbackComponent } from './doctor/doctordashboard/viewuserfeedback/viewuserfeedback.component';
import { AdmineditfeedbackdetailsComponent } from './admin/admindashboard/admineditfeedbackdetails/admineditfeedbackdetails.component';
import { AdmincustomerupdatefeedbackComponent } from './admin/admindashboard/admincustomerupdatefeedback/admincustomerupdatefeedback.component';
import { AdmincustomerfeedbackuserComponent } from './admin/admindashboard/admincustomerfeedbackuser/admincustomerfeedbackuser.component';
import { DoctorprofileComponent } from './user/dashboard/doctorprofile/doctorprofile.component';
import { AdmindoctorprofileComponent } from './admin/admindashboard/admindoctorprofile/admindoctorprofile.component';
import { AdmincustomerprofileComponent } from './admin/admindashboard/admincustomerprofile/admincustomerprofile.component';
import { CustomerprofileComponent } from './doctor/doctordashboard/customerprofile/customerprofile.component';
import { DoctorprofiledetailsComponent } from './doctor/doctordashboard/doctorprofiledetails/doctorprofiledetails.component';
import { CustomerprofiledetailsComponent } from './user/dashboard/customerprofiledetails/customerprofiledetails.component';
import { AdmincustomerupdatefeedbackratingComponent } from './admin/admindashboard/admincustomerupdatefeedbackrating/admincustomerupdatefeedbackrating.component';
import { DoctorprofileinfoComponent } from './doctorprofileinfo/doctorprofileinfo.component';
import { CustomerprofileinfoComponent } from './customerprofileinfo/customerprofileinfo.component';


const routes: Routes = [
  {
    path:'',
    component:AdvancedsearchComponent
  },
  {
    path:'search/:searchlocation/:searchspeciality',
    component:SearchComponent
  },
  {
    path:'topsearch/:doctorsearch',
    component:TopsearchComponent
  },
  {
    path:'doctorprofileinfo/:id',
    component: DoctorprofileinfoComponent,
  
  },   {
    path:'customerprofileinfo/:id',
    component: CustomerprofileinfoComponent,
  
  }, 
  {
    path:'user/verify',
    component:VerifyComponent
  },
  {
    path:'admin/adminverify',
    component:AdminverifyComponent
  },
  {
    path:'user/retrieve',
    component:RetrieveComponent
  },
  {
    path:'admin/adminretrieve',
    component:AdminretrieveComponent
  },
  {
    path:'doctor/doctorretrieve',
    component:DoctorretrieveComponent
  },
  {
    path:'user/resetpassword/:id',
    component:ResetpasswordComponent
  },
  {
    path:'admin/adminresetpassword/:id',
    component:AdminresetpasswordComponent
  },
  {
    path:'doctor/doctorresetpassword/:id',
    component:DoctorresetpasswordComponent
  },
  {
    path:'user/login',
    component:LoginComponent
  },
  {
    path:'admin/adminlogin',
    component:AdminloginComponent
  },
  {
    path:'doctor/doctorlogin',
    component:DoctorloginComponent
  },
  {
    path:'user/signup',
    component:SignupComponent
  },
  {
    path:'admin/adminsignup',
    component:AdminsignupComponent
  },
  {
    path:'user/dashboard',
    component: BookappointmentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user/dashboard/bookappointmentdoctor/:id',
    component: BookappointmentdoctorComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user/dashboard/doctorprofile/:id',
    component: DoctorprofileComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path:'user/dashboard/customerprofiledetails/:id',
    component: CustomerprofiledetailsComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path:'doctor/doctordashboard/customerprofile/:id',
    component: CustomerprofileComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path:'doctor/doctordashboard/doctorprofiledetails/:id',
    component: DoctorprofiledetailsComponent,
    canActivate:[AuthGuard]
  }, 
  
  {
    path:'admin/admindashboard/admindoctorprofile/:id',
    component: AdmindoctorprofileComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path:'admin/admindashboard/admincustomerprofile/:id',
    component: AdmincustomerprofileComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'admin/admindashboard/admineditcustomerpid/:id',
    component: AdmineditcustomerpidComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditcustomername/:id',
    component: AdmineditcustomernameComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditcustomerprofileimg/:id',
    component: AdmineditcustomerprofileimgComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditcustomergender/:id',
    component: AdmineditcustomergenderComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditcustomeractive/:id',
    component: AdmineditcustomeractiveComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditcustomeraddress/:id',
    component: AdmineditcustomeraddressComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditcustomerdateofbirth/:id',
    component: AdmineditcustomerdateofbirthComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditcustomeremail/:id',
    component: AdmineditcustomeremailComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditcustomermobileno/:id',
    component: AdmineditcustomermobilenoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditcustomeraltermobileno/:id',
    component: AdmineditcustomeraltermobilenoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditcustomerusername/:id',
    component: AdmineditcustomerusernameComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditcustomerdetails/:id',
    component: AdmineditcustomerdetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctordetails/:id',
    component: AdmineditdoctordetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard',
    component: AdmineditprofileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'doctor/doctordashboard',
    component: DoctoreditprofileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user/dashboard/editprofile',
    component: EditprofileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditprofile',
    component: AdmineditprofileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'doctor/doctordashboard/doctoreditprofile',
    component: DoctoreditprofileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'doctor/doctordashboard/consulttime',
    component: ConsulttimeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'doctor/doctordashboard/enableonlineconsult',
    component: EnableonlineconsultComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditpassword',
    component: AdmineditpasswordComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user/dashboard/editpassword',
    component: EditpasswordComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user/dashboard/bookappointment',
    component: BookappointmentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user/dashboard/pastappointment',
    component: PastappointmentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user/dashboard/upcomingappointment',
    component: UpcomimgappointmentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/adminadddoctor',
    component: AdminadddoctorComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/adminviewdoctorslist',
    component: AdminviewdoctorslistComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/adminviewcustomerslist',
    component: AdminviewcustomerslistComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/adminviewappointmentslist',
    component: AdminviewappointmentslistComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/adminviewfeedbacks',
    component: AdminviewfeedbacksComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/adminallocatepid',
    component: AdminallocatepidComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'doctor/doctordashboard/doctoreditpassword',
    component: DoctoreditpasswordComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'doctor/doctordashboard/doctorviewappointments',
    component: DoctorviewappointmentsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'doctor/doctordashboard/doctorviewcustomers',
    component: DoctorviewcustomersComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctorprofileimg/:id',
    component: AdmineditdoctorprofileimgComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctoremail/:id',
    component: AdmineditdoctoremailComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctorspeciality/:id',
    component: AdmineditdoctorspecialityComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctorname/:id',
    component: AdmineditdoctornameComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctoraltermobileno/:id',
    component: AdmineditdoctoraltermobilenoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctormobileno/:id',
    component: AdmineditdoctormobilenoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctorusername/:id',
    component: AdmineditdoctorusernameComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctordateofbirth/:id',
    component: AdmineditdoctordateofbirthComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctorgender/:id',
    component: AdmineditdoctorgenderComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctoraddress/:id',
    component:AdmineditdoctoraddressComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctoractive/:id',
    component: AdmineditdoctoractiveComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctorconsulttime/:id',
    component: AdmineditdoctorconsulttimeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditdoctorconsulttimeenable/:id',
    component: AdmineditdoctorconsulttimeenableComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admincustomerpastappointments/:id',
    component: AdmincustomerpastappointmentsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admincustomerupcomingappointments/:id',
    component: AdmincustomerupcomimgappointmentsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admincustomerbookappointment/:customerid/:id',
    component: AdmincustomerbookappointmentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admincustomerbookappointmentsearch/:id',
    component:  AdmincustomerbookappointmentsearchComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditappointmentdetails/:id',
    component: AdmineditappointmentdetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admineditfeedbackdetails/:id',
    component: AdmineditfeedbackdetailsComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'admin/admindashboard/admincustomerconsultmethod/:id',
    component: AdmincustomerconsultmethodComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admincustomerupdatefeedback/:id',
    component: AdmincustomerupdatefeedbackComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admincustomerupdatefeedbackrating/:id',
    component: AdmincustomerupdatefeedbackratingComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'admin/admindashboard/admincustomerpaytransid/:id',
    component: AdmincustomerpaytransidComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'doctor/doctordashboard/adddoctordescription/:userid/:id',
    component: AdddoctordescriptionComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user/dashboard/viewdoctordescription/:doctorid/:id',
    component:  ViewdoctordescriptionComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admincustomerdoctordescription/:doctorid/:userid',
    component:   AdmincustomerdoctordescriptionComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admincustomerfeedbackuser/:doctorid/:userid',
    component:    AdmincustomerfeedbackuserComponent,
    canActivate:[AuthGuard]
  },
 
  {
    path:'admin/admindashboard/admincustomerupdatedoctordescription/:id',
    component:    AdmincustomerupdatedoctordescriptionComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/admindoctorpastappointmentsdetails/:id',
    component:    AdmindoctorpastappointmentsdetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/admindashboard/adminupcomingappointmentsdetails/:id',
    component:   AdminupcomingappointmentsdetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'user/dashboard/addcustomerfeedback/:doctorid/:id',
    component:  AddcustomerfeedbackComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'doctor/doctordashboard/viewuserfeedback/:userid/:id',
    component:  ViewuserfeedbackComponent ,
    canActivate:[AuthGuard]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
