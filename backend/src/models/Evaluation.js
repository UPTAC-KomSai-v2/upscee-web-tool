const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
  course: { type: String, required: true }, // Course being evaluated
  responses: { // Stores Likert-scale responses for multiple questions
    type: [Number],
    validate: {
      validator: function (arr) {
        return arr.length === 18; // Ensure there are exactly 18 responses
      },
      message: 'Responses must contain exactly 18 ratings.',
    },
    required: true,
  },
  strengths: { type: String }, // Qualitative feedback: strengths
  areasForImprovement: { type: String }, // Qualitative feedback: areas for improvement
  confirmation: { type: Boolean, required: true }, // Confirmation of anonymity policy
}, {
  timestamps: true, // Automatically track createdAt and updatedAt
});

module.exports = mongoose.model('Evaluation', evaluationSchema);