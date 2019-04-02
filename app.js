

'use strict';



require('./passportConfig');
var path = require("path");
var cors=require("cors")
var express = require('express');
var bodyParser = require("body-parser");

const router = express.Router();
var app = express();
var http = require('http')
const passport = require('passport');

app.use(cors());

const port = 4003;
app.use(bodyParser.json());
app.use(passport.initialize());

require('./routes')(router);
app.use('/', router);

// app.use((err, req, res) => {
//     if (err.name === 'ValidationError') {
//         var valErrors = [];
//         Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
//         res.status(422).send(valErrors)
//     }
//     else{
//         console.log(err);
//     }
// });

app.listen(port, () => {
 console.log("Server listening on port " + port);
});




