const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true, // student_id should be unique
  },
  password: {
    type: String,
    required: true,
  },
  enrolled_courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',  // Reference to the Course model
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Student', studentSchema);
