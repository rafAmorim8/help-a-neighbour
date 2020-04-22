const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
  type: String,
  deadline: Date,
  items: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserClient"
  }
});

module.exports = mongoose.model('Products', ProductsSchema);