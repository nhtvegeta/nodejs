const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  description: { type: String },
});

module.exports = mongoose.model('Course', Course);
