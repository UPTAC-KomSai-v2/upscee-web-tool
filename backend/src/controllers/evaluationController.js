const Evaluation = require('../models/Evaluation');

exports.submitEvaluation = async (req, res) => {
  try {
    const { course, rating, strengths, areasForImprovement } = req.body;

    if (!course || !rating || !strengths || !areasForImprovement) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    res.status(201).json({ message: 'Evaluation submitted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};