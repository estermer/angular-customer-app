///MODULES///
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var methodOverride = require('method-override');
///********///

///MONGOOSE///
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/customers';
mongoose.connect(mongoURI);
mongoose.Promise = global.Promise;
///********///
