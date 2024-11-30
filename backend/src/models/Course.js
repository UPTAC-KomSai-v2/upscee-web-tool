const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  units: {
    type: Number,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Course', courseSchema);