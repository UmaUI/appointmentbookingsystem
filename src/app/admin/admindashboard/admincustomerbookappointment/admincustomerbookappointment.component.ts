import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { authService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Data } from '@angular/router/src/config';
import { FormGroup, FormControl, Validators,  FormBuilder} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { Text } from '@angular/compiler';
import * as emailjs from 'emailjs-com';

declare let paypal: any;


@Component({
  selector: 'app-admincustomerbookappointment',
  templateUrl: './admincustomerbookappointment.component.html',
  styleUrls: ['./admincustomerbookappointment.component.sass']
})
export class AdmincustomerbookappointmentComponent implements OnInit {

  public id: any;
  public customerid: any;
  private idSubscription: Subscription;
  minDate: Date;
  maxDate: Date;
  today = new Date();
  appointmentForm:FormGroup;
  appointmentdate: any;
  userappointmenttime: any = 0;
  systemappointmenttime: any = 0;
  consultmethod: string;
  paytransid: string;
  consultdone: string = 'no';
  TransactionID: string;
  

  checkpointMon0800am: number;
  checkpointMon0830am: number;
  checkpointMon0900am: number;
  checkpointMon0930am: number;
  checkpointMon1000am: number;
  checkpointMon1030am: number;
  checkpointMon1100am: number;
  checkpointMon1130am: number;
  checkpointMon1200pm: number;
  checkpointMon1230pm: number;
  checkpointMon0100pm: number;
  checkpointMon0130pm: number;
  checkpointMon0200pm: number;
  checkpointMon0230pm: number;
  checkpointMon0300pm: number;
  checkpointMon0330pm: number;
  checkpointMon0400pm: number;
  checkpointMon0430pm: number;
  checkpointMon0500pm: number;
  checkpointTues0800am: number;
  checkpointTues0830am: number;
  checkpointTues0900am: number;
  checkpointTues0930am: number;
  checkpointTues1000am: number;
  checkpointTues1030am: number;
  checkpointTues1100am: number;
  checkpointTues1130am: number;
  checkpointTues1200pm: number;
  checkpointTues1230pm: number;
  checkpointTues0100pm: number;
  checkpointTues0130pm: number;
  checkpointTues0200pm: number;
  checkpointTues0230pm: number;
  checkpointTues0300pm: number;
  checkpointTues0330pm: number;
  checkpointTues0400pm: number;
  checkpointTues0430pm: number;
  checkpointTues0500pm: number;
  checkpointWednes0800am: number;
  checkpointWednes0830am: number;
  checkpointWednes0900am: number;
  checkpointWednes0930am: number;
  checkpointWednes1000am: number;
  checkpointWednes1030am: number;
  checkpointWednes1100am: number;
  checkpointWednes1130am: number;
  checkpointWednes1200pm: number;
  checkpointWednes1230pm: number;
  checkpointWednes0100pm: number;
  checkpointWednes0130pm: number;
  checkpointWednes0200pm: number;
  checkpointWednes0230pm: number;
  checkpointWednes0300pm: number;
  checkpointWednes0330pm: number;
  checkpointWednes0400pm: number;
  checkpointWednes0430pm: number;
  checkpointWednes0500pm: number;
  checkpointThurs0800am: number;
  checkpointThurs0830am: number;
  checkpointThurs0900am: number;
  checkpointThurs0930am: number;
  checkpointThurs1000am: number;
  checkpointThurs1030am: number;
  checkpointThurs1100am: number;
  checkpointThurs1130am: number;
  checkpointThurs1200pm: number;
  checkpointThurs1230pm: number;
  checkpointThurs0100pm: number;
  checkpointThurs0130pm: number;
  checkpointThurs0200pm: number;
  checkpointThurs0230pm: number;
  checkpointThurs0300pm: number;
  checkpointThurs0330pm: number;
  checkpointThurs0400pm: number;
  checkpointThurs0430pm: number;
  checkpointThurs0500pm: number;
  checkpointFri0800am: number;
  checkpointFri0830am: number;
  checkpointFri0900am: number;
  checkpointFri0930am: number;
  checkpointFri1000am: number;
  checkpointFri1030am: number;
  checkpointFri1100am: number;
  checkpointFri1130am: number;
  checkpointFri1200pm: number;
  checkpointFri1230pm: number;
  checkpointFri0100pm: number;
  checkpointFri0130pm: number;
  checkpointFri0200pm: number;
  checkpointFri0230pm: number;
  checkpointFri0300pm: number;
  checkpointFri0330pm: number;
  checkpointFri0400pm: number;
  checkpointFri0430pm: number;
  checkpointFri0500pm: number;
  checkpointSatur0800am: number;
  checkpointSatur0830am: number;
  checkpointSatur0900am: number;
  checkpointSatur0930am: number;
  checkpointSatur1000am: number;
  checkpointSatur1030am: number;
  checkpointSatur1100am: number;
  checkpointSatur1130am: number;
  checkpointSatur1200pm: number;
  checkpointSatur1230pm: number;
  checkpointSatur0100pm: number;
  checkpointSatur0130pm: number;
  checkpointSatur0200pm: number;
  checkpointSatur0230pm: number;
  checkpointSatur0300pm: number;
  checkpointSatur0330pm: number;
  checkpointSatur0400pm: number;
  checkpointSatur0430pm: number;
  checkpointSatur0500pm: number;
  checkpointSun0800am: number;
  checkpointSun0830am: number;
  checkpointSun0900am: number;
  checkpointSun0930am: number;
  checkpointSun1000am: number;
  checkpointSun1030am: number;
  checkpointSun1100am: number;
  checkpointSun1130am: number;
  checkpointSun1200pm: number;
  checkpointSun1230pm: number;
  checkpointSun0100pm: number;
  checkpointSun0130pm: number;
  checkpointSun0200pm: number;
  checkpointSun0230pm: number;
  checkpointSun0300pm: number;
  checkpointSun0330pm: number;
  checkpointSun0400pm: number;
  checkpointSun0430pm: number;
  checkpointSun0500pm: number;
 

  user:Object;
  ctdoctors:Object;
  appdoctors:Object;
 
 
 constructor(
   fb: FormBuilder,
   private validateService: ValidateService, 
   private _flashMessagesService: FlashMessagesService, 
   private authService: authService,
   private router: Router,
   public route: ActivatedRoute,
   
 ) { 
  this.checkpointMon0800am = 0;
  this.checkpointMon0830am = 0;
  this.checkpointMon0900am = 0;
  this.checkpointMon0930am = 0;
  this.checkpointMon1000am = 0;
  this.checkpointMon1030am = 0;
  this.checkpointMon1100am = 0;
  this.checkpointMon1130am = 0;
  this.checkpointMon1200pm = 0;
  this.checkpointMon1230pm = 0;
  this.checkpointMon0100pm = 0;
  this.checkpointMon0130pm = 0;
  this.checkpointMon0200pm = 0;
  this.checkpointMon0230pm = 0;
  this.checkpointMon0300pm = 0;
  this.checkpointMon0330pm = 0;
  this.checkpointMon0400pm = 0;
  this.checkpointMon0430pm = 0;
  this.checkpointMon0500pm = 0;
  this.checkpointTues0800am = 0;
  this.checkpointTues0830am = 0;
  this.checkpointTues0900am = 0;
  this.checkpointTues0930am = 0;
  this.checkpointTues1000am = 0;
  this.checkpointTues1030am = 0;
  this.checkpointTues1100am = 0;
  this.checkpointTues1130am = 0;
  this.checkpointTues1200pm = 0;
  this.checkpointTues1230pm = 0;
  this.checkpointTues0100pm = 0;
  this.checkpointTues0130pm = 0;
  this.checkpointTues0200pm = 0;
  this.checkpointTues0230pm = 0;
  this.checkpointTues0300pm = 0;
  this.checkpointTues0330pm = 0;
  this.checkpointTues0400pm = 0;
  this.checkpointTues0430pm = 0;
  this.checkpointTues0500pm = 0;
  this.checkpointWednes0800am = 0;
  this.checkpointWednes0830am = 0;
  this.checkpointWednes0900am = 0;
  this.checkpointWednes0930am = 0;
  this.checkpointWednes1000am = 0;
  this.checkpointWednes1030am = 0;
  this.checkpointWednes1100am = 0;
  this.checkpointWednes1130am = 0;
  this.checkpointWednes1200pm = 0;
  this.checkpointWednes1230pm = 0;
  this.checkpointWednes0100pm = 0;
  this.checkpointWednes0130pm = 0;
  this.checkpointWednes0200pm = 0;
  this.checkpointWednes0230pm = 0;
  this.checkpointWednes0300pm = 0;
  this.checkpointWednes0330pm = 0;
  this.checkpointWednes0400pm = 0;
  this.checkpointWednes0430pm = 0;
  this.checkpointWednes0500pm = 0;
  this.checkpointThurs0800am = 0;
  this.checkpointThurs0830am = 0;
  this.checkpointThurs0900am = 0;
  this.checkpointThurs0930am = 0;
  this.checkpointThurs1000am = 0;
  this.checkpointThurs1030am = 0;
  this.checkpointThurs1100am = 0;
  this.checkpointThurs1130am = 0;
  this.checkpointThurs1200pm = 0;
  this.checkpointThurs1230pm = 0;
  this.checkpointThurs0100pm = 0;
  this.checkpointThurs0130pm = 0;
  this.checkpointThurs0200pm = 0;
  this.checkpointThurs0230pm = 0;
  this.checkpointThurs0300pm = 0;
  this.checkpointThurs0330pm = 0;
  this.checkpointThurs0400pm = 0;
  this.checkpointThurs0430pm = 0;
  this.checkpointThurs0500pm = 0;
  this.checkpointFri0800am = 0;
  this.checkpointFri0830am = 0;
  this.checkpointFri0900am = 0;
  this.checkpointFri0930am = 0;
  this.checkpointFri1000am = 0;
  this.checkpointFri1030am = 0;
  this.checkpointFri1100am = 0;
  this.checkpointFri1130am = 0;
  this.checkpointFri1200pm = 0;
  this.checkpointFri1230pm = 0;
  this.checkpointFri0100pm = 0;
  this.checkpointFri0130pm = 0;
  this.checkpointFri0200pm = 0;
  this.checkpointFri0230pm = 0;
  this.checkpointFri0300pm = 0;
  this.checkpointFri0330pm = 0;
  this.checkpointFri0400pm = 0;
  this.checkpointFri0430pm = 0;
  this.checkpointFri0500pm = 0;
  this.checkpointSatur0800am = 0;
  this.checkpointSatur0830am = 0;
  this.checkpointSatur0900am = 0;
  this.checkpointSatur0930am = 0;
  this.checkpointSatur1000am = 0;
  this.checkpointSatur1030am = 0;
  this.checkpointSatur1100am = 0;
  this.checkpointSatur1130am = 0;
  this.checkpointSatur1200pm = 0;
  this.checkpointSatur1230pm = 0;
  this.checkpointSatur0100pm = 0;
  this.checkpointSatur0130pm = 0;
  this.checkpointSatur0200pm = 0;
  this.checkpointSatur0230pm = 0;
  this.checkpointSatur0300pm = 0;
  this.checkpointSatur0330pm = 0;
  this.checkpointSatur0400pm = 0;
  this.checkpointSatur0430pm = 0;
  this.checkpointSatur0500pm = 0;
  this.checkpointSun0800am = 0;
  this.checkpointSun0830am = 0;
  this.checkpointSun0900am = 0;
  this.checkpointSun0930am = 0;
  this.checkpointSun1000am = 0;
  this.checkpointSun1030am = 0;
  this.checkpointSun1100am = 0;
  this.checkpointSun1130am = 0;
  this.checkpointSun1200pm = 0;
  this.checkpointSun1230pm = 0;
  this.checkpointSun0100pm = 0;
  this.checkpointSun0130pm = 0;
  this.checkpointSun0200pm = 0;
  this.checkpointSun0230pm = 0;
  this.checkpointSun0300pm = 0;
  this.checkpointSun0330pm = 0;
  this.checkpointSun0400pm = 0;
  this.checkpointSun0430pm = 0;
  this.checkpointSun0500pm = 0;
 
 
  
  this.minDate = new Date();
  this.maxDate = new Date();
  this.minDate.setDate(this.minDate.getDate() + 3);
  this.maxDate.setDate(this.maxDate.getDate() + 9);
 
  this.appointmentForm = fb.group({
   userid: [''],
   email: [''],
   TransactionID: [''],
  appointmentdate: ['', Validators.required],
  appointmenttime: [''],
  consultmethod: ['', Validators.required],
  paytransid: ['', Validators.required],
   } )}

   

 ngOnInit() {  

     let TransactionID;
    
     paypal.Button.render({
      env: 'sandbox', // sandbox | production
                        
      style: {
              size:  'medium', // small | medium | large | responsive
              shape: 'rect',  // pill | rect
              tagline: false
              },
              funding: {
                        allowed: [ paypal.FUNDING.CREDIT ]
                       },
              client: {
                      sandbox:'ATJCzzamDZoIzCYEjPgVQz6-eYN82ZLLjVa-pB6xC_NFsUxJ6XQW37Bw7tjO3eHNU5lK6zsF4dG31GSJ',
                      production: 'EHYZBMqC1v2zElCS5X9DC4KUk3Td8V7b5ABNYH9O4kiFBnacXU6PD40FrHnAB7MgsDlY4YmyTcYMKtbb'
                   
                      },
                    
             // Show the buyer a 'Pay Now' button in the checkout flow
                      commit: true,
                    
             // payment() is called when the button is clicked
                      payment: function(data, actions) {
                    
             // Make a call to the REST api to create the payment
                      return actions.payment.create({
                          payment: {
                              transactions: [
                                      {  
                                        amount: { total: '100' , currency: 'USD' }
                                                  
                                      }
                                            ]
                                        }
                                    });
                                },
                // onAuthorize() is called when the buyer approves the payment
                onAuthorize: (data, actions) => {
               // Make a call to the REST api to execute the payment
               return actions.payment.execute().then((payment) => {  
               TransactionID = payment.transactions[0].related_resources[0].sale.id;   
               document.getElementById("transid").innerHTML = 'Payment Complete!\nYour Transaction ID is '+ TransactionID;            
               window.alert('Payment Complete!\nYour Transaction ID is '+ TransactionID); 
               this.TransactionID = TransactionID;
                      });
                      }  
                  },   '#paypalbutton-1');     

          paypal.Button.render({
          env: 'sandbox', // sandbox | production
                            
          style: {
                  size:  'medium', // small | medium | large | responsive
                  shape: 'rect',  // pill | rect
                  tagline: false
                  },
                  funding: {
                            allowed: [ paypal.FUNDING.CREDIT ]
                           },
             
                  client: {
                          sandbox:'ATJCzzamDZoIzCYEjPgVQz6-eYN82ZLLjVa-pB6xC_NFsUxJ6XQW37Bw7tjO3eHNU5lK6zsF4dG31GSJ',
                          production: 'EHYZBMqC1v2zElCS5X9DC4KUk3Td8V7b5ABNYH9O4kiFBnacXU6PD40FrHnAB7MgsDlY4YmyTcYMKtbb'
                       
                          },
                        
                 // Show the buyer a 'Pay Now' button in the checkout flow
                          commit: true,
                        
                 // payment() is called when the button is clicked
                          payment: function(data, actions) {
                        
                 // Make a call to the REST api to create the payment
                          return actions.payment.create({
                              payment: {
                                  transactions: [
                                          {  
                                            amount: { total: '70' , currency: 'USD' }
                                                      
                                          }
                                                ]
                                            }
                                        });
                                    },
                    // onAuthorize() is called when the buyer approves the payment
                    onAuthorize: (data, actions) => {
                   // Make a call to the REST api to execute the payment
                   return actions.payment.execute().then((payment) => {  
                   TransactionID = payment.transactions[0].related_resources[0].sale.id;   
                   document.getElementById("transid").innerHTML = 'Payment Complete!\nYour Transaction ID is '+ TransactionID;            
                   window.alert('Payment Complete!\nYour Transaction ID is '+ TransactionID); 
                   this.TransactionID = TransactionID;    
                          });
                          }  
                      },   '#paypalbutton-2');  
                                                  
                            
                      paypal.Button.render({
                        env: 'sandbox', // sandbox | production
                                          
                        style: {
                                size:  'medium', // small | medium | large | responsive
                                shape: 'rect',  // pill | rect
                                tagline: false
                                },
                                funding: {
                                          allowed: [ paypal.FUNDING.CREDIT ]
                                         },
                       
                                client: {
                                        sandbox:'ATJCzzamDZoIzCYEjPgVQz6-eYN82ZLLjVa-pB6xC_NFsUxJ6XQW37Bw7tjO3eHNU5lK6zsF4dG31GSJ',
                                        production: 'EHYZBMqC1v2zElCS5X9DC4KUk3Td8V7b5ABNYH9O4kiFBnacXU6PD40FrHnAB7MgsDlY4YmyTcYMKtbb'
                                     
                                        },
                                      
                               // Show the buyer a 'Pay Now' button in the checkout flow
                                        commit: true,
                                      
                               // payment() is called when the button is clicked
                                        payment: function(data, actions) {
                                      
                               // Make a call to the REST api to create the payment
                                        return actions.payment.create({
                                            payment: {
                                                transactions: [
                                                        {  
                                                          amount: { total: '50' , currency: 'USD' }
                                                                    
                                                        }
                                                              ]
                                                          }
                                                      });
                                                  },
                                  // onAuthorize() is called when the buyer approves the payment
                                  onAuthorize: (data, actions) => {
                                 // Make a call to the REST api to execute the payment
                                 return actions.payment.execute().then((payment) => {  
                                 TransactionID = payment.transactions[0].related_resources[0].sale.id;   
                                 document.getElementById("transid").innerHTML = 'Payment Complete!\nYour Transaction ID is '+ TransactionID;            
                                 window.alert('Payment Complete!\nYour Transaction ID is '+ TransactionID); 
                                 this.TransactionID = TransactionID;
                                       
                                        });
                                        }  
                                    },   '#paypalbutton-3');  
 

  this.customerid = this.route.snapshot.params['customerid'];
                                    
  this.idSubscription = this.route.params.subscribe((params: any) => {
    console.log(params.id)
    this.id = params.id;
    console.log(this.id);
  });

  this.authService.getProfile().subscribe(profile =>{
    this.user = profile.user;
    console.log(this.user);
    },
   err =>{
     console.log(err);
     return false;
   }
  );

  this.authService.getConsultTimeDoctorsProfile().subscribe(ctprofile =>{
    this.ctdoctors = ctprofile;
    console.log(this.ctdoctors);
    
    
    },
   err =>{
     this.ctdoctors= 'undifined';
     console.log(err);
     return false;
   }
  );

  this.authService.getAppointmentDoctorsProfile().subscribe(appprofile =>{
    this.appdoctors = appprofile; 
    console.log(this.appdoctors);
  
    },
   err =>{
     this.appdoctors= 'undifined';
     console.log(err);
     return false;
   }
  );

 
   
 }



 onLogoutClick(){
  this.authService.adminlogout();
  this._flashMessagesService.show('You are logged out', {cssClass:'alert-success', timeout: 3000});
  this.router.navigateByUrl('/admin/adminlogin');
  return false;
}



checkotherMon0800am(){
this.checkpointMon0800am = 10; 
}

checkotherMon0830am(){
this.checkpointMon0830am = 10; 
}

checkotherMon0900am(){
this.checkpointMon0900am = 10; 
}

checkotherMon0930am(){
this.checkpointMon0930am = 10; 
}

checkotherMon1000am(){
this.checkpointMon1000am = 10; 
}

checkotherMon1030am(){
this.checkpointMon1030am = 10; 
}

checkotherMon1100am(){
this.checkpointMon1100am = 10; 
}

checkotherMon1130am(){
this.checkpointMon1130am = 10; 
}

checkotherMon1200pm(){
this.checkpointMon1200pm = 10; 
}

checkotherMon1230pm(){
this.checkpointMon1230pm = 10; 
}

checkotherMon0100pm(){
this.checkpointMon0100pm = 10; 
}
  
checkotherMon0130pm(){
this.checkpointMon0130pm = 10; 
}

checkotherMon0200pm(){
this.checkpointMon0200pm = 10; 
}
  
checkotherMon0230pm(){
this.checkpointMon0230pm = 10; 
}

checkotherMon0300pm(){
this.checkpointMon0300pm = 10; 
}
  
checkotherMon0330pm(){
this.checkpointMon0330pm = 10; 
}

checkotherMon0400pm(){
this.checkpointMon0400pm = 10; 
}
  
checkotherMon0430pm(){
this.checkpointMon0430pm = 10; 
}

checkotherMon0500pm(){
this.checkpointMon0500pm = 10; 
}

checkotherTues0800am(){
  this.checkpointTues0800am = 10; 
  }
  
  checkotherTues0830am(){
  this.checkpointTues0830am = 10; 
  }
  
  checkotherTues0900am(){
  this.checkpointTues0900am = 10; 
  }
  
  checkotherTues0930am(){
  this.checkpointTues0930am = 10; 
  }
  
  checkotherTues1000am(){
  this.checkpointTues1000am = 10; 
  }
  
  checkotherTues1030am(){
  this.checkpointTues1030am = 10; 
  }
  
  checkotherTues1100am(){
  this.checkpointTues1100am = 10; 
  }
  
  checkotherTues1130am(){
  this.checkpointTues1130am = 10; 
  }
  
  checkotherTues1200pm(){
  this.checkpointTues1200pm = 10; 
  }
  
  checkotherTues1230pm(){
  this.checkpointTues1230pm = 10; 
  }
  
  checkotherTues0100pm(){
  this.checkpointTues0100pm = 10; 
  }
    
  checkotherTues0130pm(){
  this.checkpointTues0130pm = 10; 
  }
  
  checkotherTues0200pm(){
  this.checkpointTues0200pm = 10; 
  }
    
  checkotherTues0230pm(){
  this.checkpointTues0230pm = 10; 
  }
  
  checkotherTues0300pm(){
  this.checkpointTues0300pm = 10; 
  }
    
  checkotherTues0330pm(){
  this.checkpointTues0330pm = 10; 
  }
  
  checkotherTues0400pm(){
  this.checkpointTues0400pm = 10; 
  }
    
  checkotherTues0430pm(){
  this.checkpointTues0430pm = 10; 
  }
  
  checkotherTues0500pm(){
  this.checkpointTues0500pm = 10; 
  }

  checkotherWednes0800am(){
    this.checkpointWednes0800am = 10; 
    }
    
    checkotherWednes0830am(){
    this.checkpointWednes0830am = 10; 
    }
    
    checkotherWednes0900am(){
    this.checkpointWednes0900am = 10; 
    }
    
    checkotherWednes0930am(){
    this.checkpointWednes0930am = 10; 
    }
    
    checkotherWednes1000am(){
    this.checkpointWednes1000am = 10; 
    }
    
    checkotherWednes1030am(){
    this.checkpointWednes1030am = 10; 
    }
    
    checkotherWednes1100am(){
    this.checkpointWednes1100am = 10; 
    }
    
    checkotherWednes1130am(){
    this.checkpointWednes1130am = 10; 
    }
    
    checkotherWednes1200pm(){
    this.checkpointWednes1200pm = 10; 
    }
    
    checkotherWednes1230pm(){
    this.checkpointWednes1230pm = 10; 
    }
    
    checkotherWednes0100pm(){
    this.checkpointWednes0100pm = 10; 
    }
      
    checkotherWednes0130pm(){
    this.checkpointWednes0130pm = 10; 
    }
    
    checkotherWednes0200pm(){
    this.checkpointWednes0200pm = 10; 
    }
      
    checkotherWednes0230pm(){
    this.checkpointWednes0230pm = 10; 
    }
    
    checkotherWednes0300pm(){
    this.checkpointWednes0300pm = 10; 
    }
      
    checkotherWednes0330pm(){
    this.checkpointWednes0330pm = 10; 
    }
    
    checkotherWednes0400pm(){
    this.checkpointWednes0400pm = 10; 
    }
      
    checkotherWednes0430pm(){
    this.checkpointWednes0430pm = 10; 
    }
    
    checkotherWednes0500pm(){
    this.checkpointWednes0500pm = 10; 
    }

    checkotherThurs0800am(){
      this.checkpointThurs0800am = 10; 
      }
      
      checkotherThurs0830am(){
      this.checkpointThurs0830am = 10; 
      }
      
      checkotherThurs0900am(){
      this.checkpointThurs0900am = 10; 
      }
      
      checkotherThurs0930am(){
      this.checkpointThurs0930am = 10; 
      }
      
      checkotherThurs1000am(){
      this.checkpointThurs1000am = 10; 
      }
      
      checkotherThurs1030am(){
      this.checkpointThurs1030am = 10; 
      }
      
      checkotherThurs1100am(){
      this.checkpointThurs1100am = 10; 
      }
      
      checkotherThurs1130am(){
      this.checkpointThurs1130am = 10; 
      }
      
      checkotherThurs1200pm(){
      this.checkpointThurs1200pm = 10; 
      }
      
      checkotherThurs1230pm(){
      this.checkpointThurs1230pm = 10; 
      }
      
      checkotherThurs0100pm(){
      this.checkpointThurs0100pm = 10; 
      }
        
      checkotherThurs0130pm(){
      this.checkpointThurs0130pm = 10; 
      }
      
      checkotherThurs0200pm(){
      this.checkpointThurs0200pm = 10; 
      }
        
      checkotherThurs0230pm(){
      this.checkpointThurs0230pm = 10; 
      }
      
      checkotherThurs0300pm(){
      this.checkpointThurs0300pm = 10; 
      }
        
      checkotherThurs0330pm(){
      this.checkpointThurs0330pm = 10; 
      }
      
      checkotherThurs0400pm(){
      this.checkpointThurs0400pm = 10; 
      }
        
      checkotherThurs0430pm(){
      this.checkpointThurs0430pm = 10; 
      }
      
      checkotherThurs0500pm(){
      this.checkpointThurs0500pm = 10; 
      }
      
      checkotherFri0800am(){
        this.checkpointFri0800am = 10; 
        }
        
        checkotherFri0830am(){
        this.checkpointFri0830am = 10; 
        }
        
        checkotherFri0900am(){
        this.checkpointFri0900am = 10; 
        }
        
        checkotherFri0930am(){
        this.checkpointFri0930am = 10; 
        }
        
        checkotherFri1000am(){
        this.checkpointFri1000am = 10; 
        }
        
        checkotherFri1030am(){
        this.checkpointFri1030am = 10; 
        }
        
        checkotherFri1100am(){
        this.checkpointFri1100am = 10; 
        }
        
        checkotherFri1130am(){
        this.checkpointFri1130am = 10; 
        }
        
        checkotherFri1200pm(){
        this.checkpointFri1200pm = 10; 
        }
        
        checkotherFri1230pm(){
        this.checkpointFri1230pm = 10; 
        }
        
        checkotherFri0100pm(){
        this.checkpointFri0100pm = 10; 
        }
          
        checkotherFri0130pm(){
        this.checkpointFri0130pm = 10; 
        }
        
        checkotherFri0200pm(){
        this.checkpointFri0200pm = 10; 
        }
          
        checkotherFri0230pm(){
        this.checkpointFri0230pm = 10; 
        }
        
        checkotherFri0300pm(){
        this.checkpointFri0300pm = 10; 
        }
          
        checkotherFri0330pm(){
        this.checkpointFri0330pm = 10; 
        }
        
        checkotherFri0400pm(){
        this.checkpointFri0400pm = 10; 
        }
          
        checkotherFri0430pm(){
        this.checkpointFri0430pm = 10; 
        }
        
        checkotherFri0500pm(){
        this.checkpointFri0500pm = 10; 
        }  

        checkotherSatur0800am(){
          this.checkpointSatur0800am = 10; 
          }
          
          checkotherSatur0830am(){
          this.checkpointSatur0830am = 10; 
          }
          
          checkotherSatur0900am(){
          this.checkpointSatur0900am = 10; 
          }
          
          checkotherSatur0930am(){
          this.checkpointSatur0930am = 10; 
          }
          
          checkotherSatur1000am(){
          this.checkpointSatur1000am = 10; 
          }
          
          checkotherSatur1030am(){
          this.checkpointSatur1030am = 10; 
          }
          
          checkotherSatur1100am(){
          this.checkpointSatur1100am = 10; 
          }
          
          checkotherSatur1130am(){
          this.checkpointSatur1130am = 10; 
          }
          
          checkotherSatur1200pm(){
          this.checkpointSatur1200pm = 10; 
          }
          
          checkotherSatur1230pm(){
          this.checkpointSatur1230pm = 10; 
          }
          
          checkotherSatur0100pm(){
          this.checkpointSatur0100pm = 10; 
          }
            
          checkotherSatur0130pm(){
          this.checkpointSatur0130pm = 10; 
          }
          
          checkotherSatur0200pm(){
          this.checkpointSatur0200pm = 10; 
          }
            
          checkotherSatur0230pm(){
          this.checkpointSatur0230pm = 10; 
          }
          
          checkotherSatur0300pm(){
          this.checkpointSatur0300pm = 10; 
          }
            
          checkotherSatur0330pm(){
          this.checkpointSatur0330pm = 10; 
          }
          
          checkotherSatur0400pm(){
          this.checkpointSatur0400pm = 10; 
          }
            
          checkotherSatur0430pm(){
          this.checkpointSatur0430pm = 10; 
          }
          
          checkotherSatur0500pm(){
          this.checkpointSatur0500pm = 10; 
          }  

          checkotherSun0800am(){
            this.checkpointSun0800am = 10; 
            }
            
            checkotherSun0830am(){
            this.checkpointSun0830am = 10; 
            }
            
            checkotherSun0900am(){
            this.checkpointSun0900am = 10; 
            }
            
            checkotherSun0930am(){
            this.checkpointSun0930am = 10; 
            }
            
            checkotherSun1000am(){
            this.checkpointSun1000am = 10; 
            }
            
            checkotherSun1030am(){
            this.checkpointSun1030am = 10; 
            }
            
            checkotherSun1100am(){
            this.checkpointSun1100am = 10; 
            }
            
            checkotherSun1130am(){
            this.checkpointSun1130am = 10; 
            }
            
            checkotherSun1200pm(){
            this.checkpointSun1200pm = 10; 
            }
            
            checkotherSun1230pm(){
            this.checkpointSun1230pm = 10; 
            }
            
            checkotherSun0100pm(){
            this.checkpointSun0100pm = 10; 
            }
              
            checkotherSun0130pm(){
            this.checkpointSun0130pm = 10; 
            }
            
            checkotherSun0200pm(){
            this.checkpointSun0200pm = 10; 
            }
              
            checkotherSun0230pm(){
            this.checkpointSun0230pm = 10; 
            }
            
            checkotherSun0300pm(){
            this.checkpointSun0300pm = 10; 
            }
              
            checkotherSun0330pm(){
            this.checkpointSun0330pm = 10; 
            }
            
            checkotherSun0400pm(){
            this.checkpointSun0400pm = 10; 
            }
              
            checkotherSun0430pm(){
            this.checkpointSun0430pm = 10; 
            }
            
            checkotherSun0500pm(){
            this.checkpointSun0500pm = 10; 
            } 
       



checkValueMon0800am(userappointmenttime: any){
  this.userappointmenttime = '08:00 AM';
  this.systemappointmenttime = '0800';
}
checkValueMon0830am(userappointmenttime: any){
  this.userappointmenttime = '08:30 AM';
  this.systemappointmenttime = '0830';
}
checkValueMon0900am(userappointmenttime: any){
  this.userappointmenttime = '09:00 AM';
  this.systemappointmenttime = '0900';  
}
checkValueMon0930am(userappointmenttime: any){
  this.userappointmenttime = '09:30 AM';
  this.systemappointmenttime = '0930';  
}
checkValueMon1000am(userappointmenttime: any){
  this.userappointmenttime = '10:00 AM';
  this.systemappointmenttime = '1000';  
}
checkValueMon1030am(userappointmenttime: any){
  this.userappointmenttime = '10:30 AM';
  this.systemappointmenttime = '1030';
}
checkValueMon1100am(userappointmenttime: any){
  this.userappointmenttime = '11:00 AM';
  this.systemappointmenttime = '1100';  
}
checkValueMon1130am(userappointmenttime: any){
  this.userappointmenttime = '11:30 AM';
  this.systemappointmenttime = '1130';  
}
checkValueMon1200pm(userappointmenttime: any){
  this.userappointmenttime = '12:00 PM';
  this.systemappointmenttime = '1200';  
}
checkValueMon1230pm(userappointmenttime: any){
  this.userappointmenttime = '12:30 PM';
  this.systemappointmenttime = '1230';  
}
checkValueMon0100pm(userappointmenttime: any){
  this.userappointmenttime = '01:00 PM';
  this.systemappointmenttime = '1300';  
}
checkValueMon0130pm(userappointmenttime: any){
  this.userappointmenttime = '01:30 PM';
  this.systemappointmenttime = '1330';
}
checkValueMon0200pm(userappointmenttime: any){
  this.userappointmenttime = '02:00 PM';
  this.systemappointmenttime = '1400';  
}
checkValueMon0230pm(userappointmenttime: any){
  this.userappointmenttime = '02:30 PM';
  this.systemappointmenttime = '1430';  
}
checkValueMon0300pm(userappointmenttime: any){
  this.userappointmenttime = '03:00 PM';
  this.systemappointmenttime = '1500';  
}
checkValueMon0330pm(userappointmenttime: any){
  this.userappointmenttime = '03:30 PM';
  this.systemappointmenttime = '1530';
}
checkValueMon0400pm(userappointmenttime: any){
  this.userappointmenttime = '04:00 PM';
  this.systemappointmenttime = '1600';  
}
checkValueMon0430pm(userappointmenttime: any){
  this.userappointmenttime = '04:30 PM';
  this.systemappointmenttime = '1630';  
}
checkValueMon0500pm(userappointmenttime: any){
  this.userappointmenttime = '05:00 PM';
  this.systemappointmenttime = '1700';
  
}

checkValueTues0800am(userappointmenttime: any){
  this.userappointmenttime = '08:00 AM';
  this.systemappointmenttime = '0800';
  
}
checkValueTues0830am(userappointmenttime: any){
  this.userappointmenttime = '08:30 AM';
  this.systemappointmenttime = '0830';
  
}
checkValueTues0900am(userappointmenttime: any){
  this.userappointmenttime = '09:00 AM';
  this.systemappointmenttime = '0900';
  
}
checkValueTues0930am(userappointmenttime: any){
  this.userappointmenttime = '09:30 AM';
  this.systemappointmenttime = '0930';  
}
checkValueTues1000am(userappointmenttime: any){
  this.userappointmenttime = '10:00 AM';
  this.systemappointmenttime = '1000';
  
}
checkValueTues1030am(userappointmenttime: any){
  this.userappointmenttime = '10:30 AM';
  this.systemappointmenttime = '1030';
  
}
checkValueTues1100am(userappointmenttime: any){
  this.userappointmenttime = '11:00 AM';
  this.systemappointmenttime = '1100';
  
}
checkValueTues1130am(userappointmenttime: any){
  this.userappointmenttime = '11:30 AM';
  this.systemappointmenttime = '1130';
  
}
checkValueTues1200pm(userappointmenttime: any){
  this.userappointmenttime = '12:00 PM';
  this.systemappointmenttime = '1200';
  
}
checkValueTues1230pm(userappointmenttime: any){
  this.userappointmenttime = '12:30 PM';
  this.systemappointmenttime = '1230';
  
}
checkValueTues0100pm(userappointmenttime: any){
  this.userappointmenttime = '01:00 PM';
  this.systemappointmenttime = '1300';
  
}
checkValueTues0130pm(userappointmenttime: any){
  this.userappointmenttime = '01:30 PM';
  this.systemappointmenttime = '1330';  
}
checkValueTues0200pm(userappointmenttime: any){
  this.userappointmenttime = '02:00 PM';
  this.systemappointmenttime = '1400';
  
}
checkValueTues0230pm(userappointmenttime: any){
  this.userappointmenttime = '02:30 PM';
  this.systemappointmenttime = '1430';
  
}
checkValueTues0300pm(userappointmenttime: any){
  this.userappointmenttime = '03:00 PM';
  this.systemappointmenttime = '1500';
  
}
checkValueTues0330pm(userappointmenttime: any){
  this.userappointmenttime = '03:30 PM';
  this.systemappointmenttime = '1530';
  
}
checkValueTues0400pm(userappointmenttime: any){
  this.userappointmenttime = '04:00 PM';
  this.systemappointmenttime = '1600';
  
}
checkValueTues0430pm(userappointmenttime: any){
  this.userappointmenttime = '04:30 PM';
  this.systemappointmenttime = '1630';
  
}
checkValueTues0500pm(userappointmenttime: any){
  this.userappointmenttime = '05:00 PM';
  this.systemappointmenttime = '1700';
  
}

checkValueWednes0800am(userappointmenttime: any){
  this.userappointmenttime = '08:00 AM';
  this.systemappointmenttime = '0800';
  
}
checkValueWednes0830am(userappointmenttime: any){
  this.userappointmenttime = '08:30 AM';
  this.systemappointmenttime = '0830';
  
}
checkValueWednes0900am(userappointmenttime: any){
  this.userappointmenttime = '09:00 AM';
  this.systemappointmenttime = '0900';
  
}
checkValueWednes0930am(userappointmenttime: any){
  this.userappointmenttime = '09:30 AM';
  this.systemappointmenttime = '0930';
  
}
checkValueWednes1000am(userappointmenttime: any){
  this.userappointmenttime = '10:00 AM';
  this.systemappointmenttime = '1000';
  
}
checkValueWednes1030am(userappointmenttime: any){
  this.userappointmenttime = '10:30 AM';
  this.systemappointmenttime = '1030';
  
}
checkValueWednes1100am(userappointmenttime: any){
  this.userappointmenttime = '11:00 AM';
  this.systemappointmenttime = '1100';
  
}
checkValueWednes1130am(userappointmenttime: any){
  this.userappointmenttime = '11:30 AM';
  this.systemappointmenttime = '1130';
  
}
checkValueWednes1200pm(userappointmenttime: any){
  this.userappointmenttime = '12:00 PM';
  this.systemappointmenttime = '1200';
  
}
checkValueWednes1230pm(userappointmenttime: any){
  this.userappointmenttime = '12:30 PM';
  this.systemappointmenttime = '1230';
  
}
checkValueWednes0100pm(userappointmenttime: any){
  this.userappointmenttime = '01:00 PM';
  this.systemappointmenttime = '1300';
  
}
checkValueWednes0130pm(userappointmenttime: any){
  this.userappointmenttime = '01:30 PM';
  this.systemappointmenttime = '1330';
  
}
checkValueWednes0200pm(userappointmenttime: any){
  this.userappointmenttime = '02:00 PM';
  this.systemappointmenttime = '1400';
  
}
checkValueWednes0230pm(userappointmenttime: any){
  this.userappointmenttime = '02:30 PM';
  this.systemappointmenttime = '1430';
  
}
checkValueWednes0300pm(userappointmenttime: any){
  this.userappointmenttime = '03:00 PM';
  this.systemappointmenttime = '1500';
  
}
checkValueWednes0330pm(userappointmenttime: any){
  this.userappointmenttime = '03:30 PM';
  this.systemappointmenttime = '1530';
  
}
checkValueWednes0400pm(userappointmenttime: any){
  this.userappointmenttime = '04:00 PM';
  this.systemappointmenttime = '1600';
  
}
checkValueWednes0430pm(userappointmenttime: any){
  this.userappointmenttime = '04:30 PM';
  this.systemappointmenttime = '1630';
  
}
checkValueWednes0500pm(userappointmenttime: any){
  this.userappointmenttime = '05:00 PM';
  this.systemappointmenttime = '1700';
  
}

checkValueThurs0800am(userappointmenttime: any){
  this.userappointmenttime = '08:00 AM';
  this.systemappointmenttime = '0800';
  
}
checkValueThurs0830am(userappointmenttime: any){
  this.userappointmenttime = '08:30 AM';
  this.systemappointmenttime = '0830';
  
}
checkValueThurs0900am(userappointmenttime: any){
  this.userappointmenttime = '09:00 AM';
  this.systemappointmenttime = '0900';
  
}
checkValueThurs0930am(userappointmenttime: any){
  this.userappointmenttime = '09:30 AM';
  this.systemappointmenttime = '0930';
  
}
checkValueThurs1000am(userappointmenttime: any){
  this.userappointmenttime = '10:00 AM';
  this.systemappointmenttime = '1000';
  
}
checkValueThurs1030am(userappointmenttime: any){
  this.userappointmenttime = '10:30 AM';
  this.systemappointmenttime = '1030';
  
}
checkValueThurs1100am(userappointmenttime: any){
  this.userappointmenttime = '11:00 AM';
  this.systemappointmenttime = '1100';
  
}
checkValueThurs1130am(userappointmenttime: any){
  this.userappointmenttime = '11:30 AM';
  this.systemappointmenttime = '1130';
  
}
checkValueThurs1200pm(userappointmenttime: any){
  this.userappointmenttime = '12:00 PM';
  this.systemappointmenttime = '1200';
  
}
checkValueThurs1230pm(userappointmenttime: any){
  this.userappointmenttime = '12:30 PM';
  this.systemappointmenttime = '1230';
  
}
checkValueThurs0100pm(userappointmenttime: any){
  this.userappointmenttime = '01:00 PM';
  this.systemappointmenttime = '1300';
  
}
checkValueThurs0130pm(userappointmenttime: any){
  this.userappointmenttime = '01:30 PM';
  this.systemappointmenttime = '1330';
  
}
checkValueThurs0200pm(userappointmenttime: any){
  this.userappointmenttime = '02:00 PM';
  this.systemappointmenttime = '1400';
  
}
checkValueThurs0230pm(userappointmenttime: any){
  this.userappointmenttime = '02:30 PM';
  this.systemappointmenttime = '1430';
  
}
checkValueThurs0300pm(userappointmenttime: any){
  this.userappointmenttime = '03:00 PM';
  this.systemappointmenttime = '1500';
  
}
checkValueThurs0330pm(userappointmenttime: any){
  this.userappointmenttime = '03:30 PM';
  this.systemappointmenttime = '1530';
  
}
checkValueThurs0400pm(userappointmenttime: any){
  this.userappointmenttime = '04:00 PM';
  this.systemappointmenttime = '1600';
  
}
checkValueThurs0430pm(userappointmenttime: any){
  this.userappointmenttime = '04:30 PM';
  this.systemappointmenttime = '1630';
  
}
checkValueThurs0500pm(userappointmenttime: any){
  this.userappointmenttime = '05:00 PM';
  this.systemappointmenttime = '1700';
  
}

checkValueFri0800am(userappointmenttime: any){
  this.userappointmenttime = '08:00 AM';
  this.systemappointmenttime = '0800';
  
}
checkValueFri0830am(userappointmenttime: any){
  this.userappointmenttime = '08:30 AM';
  this.systemappointmenttime = '0830';
  
}
checkValueFri0900am(userappointmenttime: any){
  this.userappointmenttime = '09:00 AM';
  this.systemappointmenttime = '0900';
  
}
checkValueFri0930am(userappointmenttime: any){
  this.userappointmenttime = '09:30 AM';
  this.systemappointmenttime = '0930';
  
}
checkValueFri1000am(userappointmenttime: any){
  this.userappointmenttime = '10:00 AM';
  this.systemappointmenttime = '1000';
  
}
checkValueFri1030am(userappointmenttime: any){
  this.userappointmenttime = '10:30 AM';
  this.systemappointmenttime = '1030';
  
}
checkValueFri1100am(userappointmenttime: any){
  this.userappointmenttime = '11:00 AM';
  this.systemappointmenttime = '1100';
  
}
checkValueFri1130am(userappointmenttime: any){
  this.userappointmenttime = '11:30 AM';
  this.systemappointmenttime = '1130';
  
}
checkValueFri1200pm(userappointmenttime: any){
  this.userappointmenttime = '12:00 PM';
  this.systemappointmenttime = '1200';
  
}
checkValueFri1230pm(userappointmenttime: any){
  this.userappointmenttime = '12:30 PM';
  this.systemappointmenttime = '1230';
  
}
checkValueFri0100pm(userappointmenttime: any){
  this.userappointmenttime = '01:00 PM';
  this.systemappointmenttime = '1300';
  
}
checkValueFri0130pm(userappointmenttime: any){
  this.userappointmenttime = '01:30 PM';  
  this.systemappointmenttime = '1330';
  
}
checkValueFri0200pm(userappointmenttime: any){
  this.userappointmenttime = '02:00 PM';
  this.systemappointmenttime = '1400';
  
}
checkValueFri0230pm(userappointmenttime: any){
  this.userappointmenttime = '02:30 PM';
  this.systemappointmenttime = '1430';
  
}
checkValueFri0300pm(userappointmenttime: any){
  this.userappointmenttime = '03:00 PM';
  this.systemappointmenttime = '1500';
  
}
checkValueFri0330pm(userappointmenttime: any){
  this.userappointmenttime = '03:30 PM';
  this.systemappointmenttime = '1530';
  
}
checkValueFri0400pm(userappointmenttime: any){
  this.userappointmenttime = '04:00 PM';
  this.systemappointmenttime = '1600';
  
}
checkValueFri0430pm(userappointmenttime: any){
  this.userappointmenttime = '04:30 PM';
  this.systemappointmenttime = '1630';
  
}
checkValueFri0500pm(userappointmenttime: any){
  this.userappointmenttime = '05:00 PM';
  this.systemappointmenttime = '1700';
  
}

checkValueSatur0800am(userappointmenttime: any){
  this.userappointmenttime = '08:00 AM';
  this.systemappointmenttime = '0800';
  
}
checkValueSatur0830am(userappointmenttime: any){
  this.userappointmenttime = '08:30 AM';
  this.systemappointmenttime = '0830';
  
}
checkValueSatur0900am(userappointmenttime: any){
  this.userappointmenttime = '09:00 AM';
  this.systemappointmenttime = '0900';
  
}
checkValueSatur0930am(userappointmenttime: any){
  this.userappointmenttime = '09:30 AM';
  this.systemappointmenttime = '0930';
  
}
checkValueSatur1000am(userappointmenttime: any){
  this.userappointmenttime = '10:00 AM';
  this.systemappointmenttime = '1000';
  
}
checkValueSatur1030am(userappointmenttime: any){
  this.userappointmenttime = '10:30 AM';
  this.systemappointmenttime = '1030';
  
}
checkValueSatur1100am(userappointmenttime: any){
  this.userappointmenttime = '11:00 AM';
  this.systemappointmenttime = '1100';
  
}
checkValueSatur1130am(userappointmenttime: any){
  this.userappointmenttime = '11:30 AM';
  this.systemappointmenttime = '1130';
  
}
checkValueSatur1200pm(userappointmenttime: any){
  this.userappointmenttime = '12:00 PM';
  this.systemappointmenttime = '1200';
  
}
checkValueSatur1230pm(userappointmenttime: any){
  this.userappointmenttime = '12:30 PM';
  this.systemappointmenttime = '1230';
  
}
checkValueSatur0100pm(userappointmenttime: any){
  this.userappointmenttime = '01:00 PM';
  this.systemappointmenttime = '1300';
  
}
checkValueSatur0130pm(userappointmenttime: any){
  this.userappointmenttime = '01:30 PM';
  this.systemappointmenttime = '1330';
  
}
checkValueSatur0200pm(userappointmenttime: any){
  this.userappointmenttime = '02:00 PM';
  this.systemappointmenttime = '1400';
  
}
checkValueSatur0230pm(userappointmenttime: any){
  this.userappointmenttime = '02:30 PM';
  this.systemappointmenttime = '1430';
  
}
checkValueSatur0300pm(userappointmenttime: any){
  this.userappointmenttime = '03:00 PM';
  this.systemappointmenttime = '1500';
  
}
checkValueSatur0330pm(userappointmenttime: any){
  this.userappointmenttime = '03:30 PM';
  this.systemappointmenttime = '1530';
  
}
checkValueSatur0400pm(userappointmenttime: any){
  this.userappointmenttime = '04:00 PM';
  this.systemappointmenttime = '1600';
  
}
checkValueSatur0430pm(userappointmenttime: any){
  this.userappointmenttime = '04:30 PM';
  this.systemappointmenttime = '1630';
  
}
checkValueSatur0500pm(userappointmenttime: any){
  this.userappointmenttime = '05:00 PM';
  this.systemappointmenttime = '1700';
  
}

checkValueSun0800am(userappointmenttime: any){
  //sundayslots0800am = this.userappointmenttime;
   this.userappointmenttime = '08:00 AM';
   this.systemappointmenttime = '0800';
   
  //console.log( this.userappointmenttime);
}
checkValueSun0830am(userappointmenttime: any){
  //sundayslots0830am = this.userappointmenttime;
  this.userappointmenttime = '08:30 AM';
  this.systemappointmenttime = '0830';
  
}
checkValueSun0900am(userappointmenttime: any){
  //sundayslots0900am = !sundayslots0900am;
  this.userappointmenttime = '09:00 AM';
  this.systemappointmenttime = '0900';
 
}
checkValueSun0930am(userappointmenttime: any){
  //sundayslots0930am = !sundayslots0930am;
  this.userappointmenttime = '09:30 AM';
  this.systemappointmenttime = '0930';
  
  
}
checkValueSun1000am(userappointmenttime: any){
  //sundayslots1000am = !sundayslots1000am;
  this.userappointmenttime = '10:00 AM';
  this.systemappointmenttime = '1000';
  
  
}

checkValueSun1030am(userappointmenttime: any){
  this.userappointmenttime = '10:30 AM';
  this.systemappointmenttime = '1030';
  
}

checkValueSun1100am(userappointmenttime: any){
  this.userappointmenttime = '11:00 AM';
  this.systemappointmenttime = '1100';
  
}

checkValueSun1130am(userappointmenttime: any){
  this.userappointmenttime = '11:30 AM';
  this.systemappointmenttime = '1130';
  
}

checkValueSun1200pm(userappointmenttime: any){
  this.userappointmenttime = '12:00 PM';
  this.systemappointmenttime = '1200';
  
}

checkValueSun1230pm(userappointmenttime: any){
  this.userappointmenttime = '12:30 PM';
  this.systemappointmenttime = '1230';
  
}

checkValueSun0100pm(userappointmenttime: any){
  this.userappointmenttime = '01:00 PM';
  this.systemappointmenttime = '1300';
  
}

checkValueSun0130pm(userappointmenttime: any){
  this.userappointmenttime = '01:30 PM';
  this.systemappointmenttime = '1330';
  
}

checkValueSun0200pm(userappointmenttime: any){
  this.userappointmenttime = '02:00 PM';
  this.systemappointmenttime = '1400';
  
}

checkValueSun0230pm(userappointmenttime: any){
  this.userappointmenttime = '02:30 PM';
  this.systemappointmenttime = '1430';
  
}

checkValueSun0300pm(userappointmenttime: any){
  this.userappointmenttime = '03:00 PM';
  this.systemappointmenttime = '1500';
  
}

checkValueSun0330pm(userappointmenttime: any){
  this.userappointmenttime = '03:30 PM';
  this.systemappointmenttime = '1530';
  
}

checkValueSun0400pm(userappointmenttime: any){
  this.userappointmenttime = '04:00 PM';
  this.systemappointmenttime = '1600';
  
}

checkValueSun0430pm(userappointmenttime: any){
  this.userappointmenttime = '04:30 PM';
  this.systemappointmenttime = '1630';
  
}

checkValueSun0500pm(userappointmenttime: any){
  this.userappointmenttime = '05:00 PM';
  this.systemappointmenttime = '1700';
  
}



   onAppointmentSignupSubmit(user){

    const transval = {
      TransactionID : this.TransactionID,
      paytransid: this.paytransid,
    }
    
     const appointmentuser = {
       userid:   this.customerid,
       doctorid: this.id,
       appointmentdate: this.appointmentdate.toDateString(),
       systemappointmentdate: this.appointmentdate.toDateString(),
       appointmenttime: this.userappointmenttime,
       systemappointmenttime: this.systemappointmenttime,
       consultmethod: this.consultmethod,
       paytransid: this.paytransid,
     }

     if(!this.validateService.validateTransid(transval)){
       console.log(transval.TransactionID);
       console.log(transval.paytransid);
      this._flashMessagesService.show('Your entered transaction id is not valid', {cssClass: 'alert-danger', timeout:3000});
      return false;
    }

   // Register User
    this.authService.signupAppointmentUser(appointmentuser).subscribe(data =>{
   
      if(data.success){
       this._flashMessagesService.show('You have booked appointment in selected time. Please, be ready on time for your doctor consultation.', {cssClass: 'alert-success', timeout:3000});
     }else{
       this._flashMessagesService.show('Error occurred during appointment booking.', {cssClass: 'alert-danger', timeout:3000});
       this.router.navigateByUrl('/user/dashboard/bookappointment')
      }
    });
   
  }
 
}


