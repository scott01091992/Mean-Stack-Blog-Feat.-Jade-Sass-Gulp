//express server\

//get modules
var express = require('express');
mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

//create express app
var app = express();

//load client
app.use(express.static(path.join(__dirname,'./client')));

//allow for app to user bodyparser
app.use(bodyParser.json());

//require mongoose and routes file
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

//listen on port 6777
app.listen(6777, function(){

});
