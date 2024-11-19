const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  category: {
    type: String, // e.g., 'Course Feedback'
    default: 'General',
  },
});

module.exports = mongoose.model('Question', questionSchema);
