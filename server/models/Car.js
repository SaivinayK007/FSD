const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  from: String,
  to: String,
  rented: { type: Boolean, default: false }  // 👈 NEW
});

module.exports = mongoose.models.Car || mongoose.model('Car', CarSchema);
