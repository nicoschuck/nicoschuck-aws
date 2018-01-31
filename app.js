var express 			= require('express');

var session 			= require('express-session');

var passport 			= require('passport');
var lokcalStrategy 		= require('passport-local').Strategy;
var dbUser 				= require('./db/index.ejs');
var mongoose 			= require('mongoose');
var bodyParser 			= require('body-parser');


var MongoClient 		= require('mongodb').MongoClient;
var server 				= require('http').Server(app);
var socketio 			= require('socket.io')(server)
var port = process.env.PORT || 3000;
var app = express(),
path = require('path'),
publicDir = path.join(__dirname,'public');

app.use(express.static(publicDir))

app.listen(port);
