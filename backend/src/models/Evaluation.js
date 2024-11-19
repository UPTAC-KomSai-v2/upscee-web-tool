const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
  course: { type: String, required: true },
  rating: { type: Number, required: true },
  feedback: { type: String, required: true },
  strengths: { type: String },
  areasForImprovement: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Evaluation', evaluationSchema);
