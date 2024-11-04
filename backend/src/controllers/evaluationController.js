const Evaluation = require('../models/Evaluation');

exports.submitEvaluation = async (req, res) => {
  try {
    const { course, rating, feedback, strengths, areasForImprovement } = req.body;

    if (!course || !rating || !feedback) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newEvaluation = new Evaluation({
      course,
      rating,
      feedback,
      strengths,
      areasForImprovement,
    });

    await newEvaluation.save();
    res.status(201).json({ message: 'Evaluation submitted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
