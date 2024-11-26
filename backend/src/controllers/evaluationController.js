const Evaluation = require('../models/Evaluation');

exports.submitEvaluation = async (req, res) => {
    try {
        const { responses, strengths, improvements } = req.body;
    
        if (!responses || !Array.isArray(responses) || !responses.length || !strengths || !improvements) {
            return res.status(400).json({ message: 'All fields are required and responses must be a non-empty array' });
        }
    
        const newEvaluation = new Evaluation({ responses, strengths, improvements });
        await newEvaluation.save();
    
        res.status(201).json({ message: 'Evaluation submitted successfully', data: newEvaluation });
    } catch (error) {
        console.error('Error saving evaluation:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};  