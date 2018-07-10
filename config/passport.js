const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const userRegister = require('../models/user');
const adminRegister = require('../models/admin');
const doctorRegister = require('../models/doctor');
const consulttimeRegister = require('../models/consulttime');
const config = require('../config/database');
//const FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = extractJwt.fromAuthHeaderWithScheme('jwt') ;
    opts.secretOrKey = config.secret;
    
   

     passport.use( 'jwt-1', new jwtStrategy(opts, (jwt_payload, done) =>{
             userRegister.getuserRegisterById(jwt_payload.data._id, (err, user) =>{
                   console.log(user);
                  if(err){
                     return done(err, false);
                 }   
                if(user){
                    return done(null, user);
                    
                 } else {
                     return done(null, false);
                 }  
                });

              }));

              passport.use( new jwtStrategy(opts, (jwt_payload, done) =>{
              adminRegister.getadminRegisterById(jwt_payload.data._id, (err, admin) =>{
                console.log(admin);
               if(err){
                  return done(err, false);
              }   
             if(admin){
                 return done(null, admin);
                 
              } else {
                  return done(null, false);
              }  
             });
            }));
        
            passport.use( 'jwt-2', new jwtStrategy(opts, (jwt_payload, done) =>{
                doctorRegister.getdoctorRegisterById(jwt_payload.data._id, (err, doctor) =>{
                      console.log(doctor);
                     if(err){
                        return done(err, false);
                    }   
                   if(doctor){
                       return done(null, doctor);
                       
                    } else {
                        return done(null, false);
                    }  
                   });
   
                 }));

                 passport.use( 'jwt-3', new jwtStrategy(opts, (jwt_payload, done) =>{
                    consulttimeRegister.getconsulttimedoctorRegisterById(jwt_payload.data._id, (err, consulttime) =>{
                          console.log(consulttime);
                         if(err){
                            return done(err, false);
                        }   
                       if(consulttime){
                           return done(null, consulttime);
                           
                        } else {
                            return done(null, false);
                        }  
                       });
       
                     }));

                    
    

        }
         
          