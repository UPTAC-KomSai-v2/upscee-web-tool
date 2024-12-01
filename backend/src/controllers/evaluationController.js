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

exports.getEvaluation = async (req, res) => {
    try {
        const { student_id, course_id } = req.query;

        // Validate required fields
        if (!student_id || !course_id) {
            return res.status(400).json({ message: 'Student ID and Course ID are required' });
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

        // Find the evaluation for the given student and course (only one expected)
        const evaluation = await Evaluation.findOne({ student_id, course_id })
            .populate('student_id', 'student_id')  // Populating student data (if needed)
            .populate('course_id', 'name'); // Populating course data (if needed)

        if (!evaluation) {
            return res.status(404).json({ message: 'No evaluation found for this student in the specified course' });
        }

        // Return the evaluation
        res.status(200).json({
            message: 'Evaluation retrieved successfully',
            data: evaluation,
        });
    } catch (error) {
        console.error('Error retrieving evaluation:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.resetEvaluation = async (req, res) => {
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

        // Find the existing evaluation
        const evaluation = await Evaluation.findOne({ student_id, course_id });

        if (!evaluation) {
            return res.status(404).json({ message: 'No evaluation found for this student in the specified course' });
        }

        // Update the evaluation fields
        evaluation.responses = responses;
        evaluation.strengths = strengths;
        evaluation.improvements = improvements;

        // Save the updated evaluation (Mongoose will update the 'updatedAt' field automatically)
        await evaluation.save();

        // Return the updated evaluation
        res.status(200).json({
            message: 'Evaluation updated successfully',
            data: evaluation,
        });

    } catch (error) {
        console.error('Error updating evaluation:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
