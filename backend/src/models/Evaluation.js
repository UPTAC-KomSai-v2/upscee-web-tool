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
  student_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Student',  // Reference to the Student model
    required: true,
  },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',  // Reference to the Course model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Evaluation', evaluationSchema);
