///MODULES///
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
///********///

///EXTERNAL FILES///
var Customer = require('./models/customer-model.js');
///**************///

///EXPRESS CONFIG///
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );    // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
  extended: true
}));
///***********///

///MONGOOSE///
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/customers';
mongoose.connect(mongoURI);
mongoose.Promise = global.Promise;
///********///

app.get('/customers', (req, res) => {
  Customer.find({}, (err, users) => {
    if(err) console.log(err);
    return users;
  })
  .then((users) => {
    res.json(users);
  });
});

app.post('/customers', (req, res) => {

});

app.put('/customers/:id', (req, res) => {

});

app.delete('/customers/:id', (req, res) => {

});


///SERVER///
app.listen(process.env.PORT || 3000, () => {
  console.log('=============================');
  console.log('SERVER CONNECTED TO PORT 3000');
  console.log('=============================');
});
///********///
