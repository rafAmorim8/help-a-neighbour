const mongoose = require('mongoose');

const UserHelperSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String
});

module.exports = mongoose.model('UserHelper', UserHelperSchema);