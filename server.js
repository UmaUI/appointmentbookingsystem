const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const adminpassport = require('passport');
const mongoose = require('mongoose');
const http = require('http');
const app = express();
const config = require('./config/database');
//const adminconfig = require('./config/admindatabase');
//var social = require('./config/facebookpassport')(app,passport);

//mongoose : connect to database
mongoose.connect(config.database);
//mongoose.connect(adminconfig.admin_database);

//On Connection
mongoose.connection.on('connected', () => {
     // console.log('Connected to database'+config.database);
      console.log('Connected to database'+config.database);
});

//On Connection
//mongoose.connection.on('connected', () => {
  //  console.log('Connected to database'+adminconfig.admin_database);
//});
//On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error:'+err);
});

// API file for interacting with MongoDB
const api = require('./routes/api');
const file = require('./routes/file');


//Cors Middleware
//app.use(cors());

//create a cors middleware
app.use(function(req, res, next) {
    //set headers to allow cross origin request.
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Parsers Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

 // Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport.js")(passport);
//require("./config/adminpassport.js")(adminpassport);


// API location
 app.use('/api', api);
 app.use('/file', file);


// Send all other requests to the Angular app
 app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
