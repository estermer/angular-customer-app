var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  name: String,
  email: String,
  telephone: String,
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  }
});

var CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;
