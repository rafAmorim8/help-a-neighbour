const mongoose = require('mongoose');

const UserClientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  address: String,
  password: String
});

module.exports = mongoose.model('UserClient', UserClientSchema);