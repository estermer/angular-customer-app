///MODULES///
var express = require('express');
var app = express();
var cors = require('cors');
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
app.use(cors());
///***********///

///MONGOOSE///
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/customers';
mongoose.connect(mongoURI);
mongoose.Promise = global.Promise;
///********///

app.get('/customers', (req, res) => {
  Customer.find({}, (err, customers) => {
    if(err) console.log(err);
    console.log("Customers >>>>>>>", customers);
    return customers;
  })
  .then((customers) => {
    res.json(customers);
  });
});

app.post('/customers', (req, res) => {
  var customer = new Customer(req.body);

  customer.save((err, customer) => {
    if(err) console.log(err);
    console.log("Customer Created >>>>>>", customer);
    res.json(customer);
  });

  // Customer.find({}, (err, customers) => {
  //   if(err) console.log(err);
  //   console.log("Customers >>>>>>>",customers);
  // });
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
