const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
  responses: {
    type: [String], // Array of responses (Likert scale or 'N/A')
    required: true,
  },
  strengths: {
    type: String,
    required: true,
  },
  improvements: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Evaluation', evaluationSchema);