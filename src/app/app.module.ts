import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { EditprofileComponent } from './user/dashboard/editprofile/editprofile.component';
import { PastappointmentComponent } from './user/dashboard/pastappointment/pastappointment.component';
import { UpcomimgappointmentComponent } from './user/dashboard/upcomimgappointment/upcomimgappointment.component';
import { BookappointmentComponent } from './user/dashboard/bookappointment/bookappointment.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { authService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { EditpasswordComponent } from './user/dashboard/editpassword/editpassword.component';
import { ReactiveFormsModule} from '@angular/forms';
import { VerifyComponent } from './user/verify/verify.component';
import { RetrieveComponent } from './user/retrieve/retrieve.component';
import { ResetpasswordComponent } from './user/resetpassword/resetpassword.component';
import { AdvancedsearchComponent } from './advancedsearch/advancedsearch.component';
import { AdminsignupComponent } from './admin/adminsignup/adminsignup.component';
import { AdminverifyComponent } from './admin/adminverify/adminverify.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminretrieveComponent } from './admin/adminretrieve/adminretrieve.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdmineditprofileComponent } from './admin/admindashboard/admineditprofile/admineditprofile.component';
import { AdmineditpasswordComponent } from './admin/admindashboard/admineditpassword/admineditpassword.component';
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
import { NgxPaginationModule } from 'ngx-pagination';
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
import { BsDatepickerModule} from 'ngx-bootstrap';
import { NgxStripeModule } from 'ngx-stripe';
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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AdmincustomerupdatefeedbackratingComponent } from './admin/admindashboard/admincustomerupdatefeedbackrating/admincustomerupdatefeedbackrating.component';
import { DoctorprofileinfoComponent } from './doctorprofileinfo/doctorprofileinfo.component';
import { CustomerprofileinfoComponent } from './customerprofileinfo/customerprofileinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EditprofileComponent,
    PastappointmentComponent,
    UpcomimgappointmentComponent,
    BookappointmentComponent,
    DashboardComponent,
    EditpasswordComponent,
    VerifyComponent,
    RetrieveComponent,
    ResetpasswordComponent,
    AdvancedsearchComponent,
    AdminsignupComponent,
    AdminverifyComponent,
    AdminloginComponent,
    AdminretrieveComponent,
    AdmindashboardComponent,
    AdmineditprofileComponent,
    AdmineditpasswordComponent,
    AdminresetpasswordComponent,
    AdminadddoctorComponent,
    AdminviewdoctorslistComponent,
    AdminviewcustomerslistComponent,
    AdminviewappointmentslistComponent,
    AdminviewfeedbacksComponent,
    AdminallocatepidComponent,
    AdmineditcustomerpidComponent,
    AdmineditcustomerdetailsComponent,
    AdmineditcustomernameComponent,
    AdmineditcustomeremailComponent,
    AdmineditcustomermobilenoComponent,
    AdmineditcustomeraltermobilenoComponent,
    AdmineditcustomerusernameComponent,
    AdmineditcustomergenderComponent,
    AdmineditcustomerdateofbirthComponent,
    AdmineditcustomeractiveComponent,
    AdmineditcustomeraddressComponent,
    AdmineditcustomerprofileimgComponent,
    DoctordashboardComponent,
    DoctorloginComponent,
    DoctorresetpasswordComponent,
    DoctorretrieveComponent,
    DoctoreditprofileComponent,
    DoctoreditpasswordComponent,
    DoctorviewappointmentsComponent,
    DoctorviewcustomersComponent,
    AdmineditdoctordetailsComponent,
    AdmineditdoctorprofileimgComponent,
    AdmineditdoctornameComponent,
    AdmineditdoctoremailComponent,
    AdmineditdoctorspecialityComponent,
    AdmineditdoctormobilenoComponent,
    AdmineditdoctorusernameComponent,
    AdmineditdoctoraltermobilenoComponent,
    AdmineditdoctordateofbirthComponent,
    AdmineditdoctorgenderComponent,
    AdmineditdoctoraddressComponent,
    AdmineditdoctoractiveComponent,
    SearchComponent,
    TopsearchComponent,
    ConsulttimeComponent,
    EnableonlineconsultComponent,
    AdmineditdoctorconsulttimeComponent,
    AdmineditdoctorconsulttimeenableComponent,
    BookappointmentdoctorComponent,
    AdmincustomerpastappointmentsComponent,
    AdmincustomerupcomimgappointmentsComponent,
    AdmincustomerbookappointmentComponent,
    AdmincustomerbookappointmentsearchComponent,
    AdmineditappointmentdetailsComponent,
    AdmincustomerconsultmethodComponent,
    AdmincustomerpaytransidComponent,
    AdddoctordescriptionComponent,
    ViewdoctordescriptionComponent,
    AdmincustomerdoctordescriptionComponent,
    AdmincustomerupdatedoctordescriptionComponent,
    AdmindoctorpastappointmentsdetailsComponent,
    AdminupcomingappointmentsdetailsComponent,
    AddcustomerfeedbackComponent,
    ViewuserfeedbackComponent,
    AdmineditfeedbackdetailsComponent,
    AdmincustomerupdatefeedbackComponent,
    AdmincustomerfeedbackuserComponent,
    DoctorprofileComponent,
    AdmindoctorprofileComponent,
    AdmincustomerprofileComponent,
    CustomerprofileComponent,
    DoctorprofiledetailsComponent,
    CustomerprofiledetailsComponent,
    AdmincustomerupdatefeedbackratingComponent,
    DoctorprofileinfoComponent,
    CustomerprofileinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule,
    BsDatepickerModule.forRoot(),
    NgxStripeModule.forRoot('pk_test_xS8KzsEdXwfPpDFWPgqSITB4'),
    NgbModule.forRoot(),
  ],
  providers: [ValidateService,authService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
