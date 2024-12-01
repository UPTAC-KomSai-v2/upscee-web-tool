const Evaluation = require('../models/Evaluation');
const Student = require('../models/Student');
const Course = require('../models/Course');

exports.submitEvaluation = async (req, res) => {
    try {
        const { student_id, course_id, responses, strengths, improvements } = req.body;
        
        // Validate required fields
        if (!student_id || !course_id || !responses || !Array.isArray(responses) || !responses.length || !strengths || !improvements) {
            return res.status(400).json({ message: 'All fields are required, and responses must be a non-empty array' });
        }
        
        // Check if the student and course exist
        const student = await Student.findById(student_id);
        const course = await Course.findById(course_id);
        
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Create the new evaluation
        const newEvaluation = new Evaluation({
            student_id,
            course_id,
            responses,
            strengths,
            improvements,
        });

        // Save the evaluation to the database
        await newEvaluation.save();
    
        res.status(201).json({
            message: 'Evaluation submitted successfully',
            data: newEvaluation,
        });
    } catch (error) {
        console.error('Error saving evaluation:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};