const bcrypt = require('bcrypt');
const Student = require('../models/Student');
const Course = require('../models/Course');

// Function to handle student registration
exports.registerStudent = async (req, res) => {
  const { student_id, password, enrolled_courses } = req.body;

  // Validate required fields
  if (!student_id || !password || !enrolled_courses) {
    return res.status(400).json({ message: 'Student ID, password, and enrolled courses are required' });
  }

  try {
    // Check if student already exists
    const existingStudent = await Student.findOne({ student_id });
    if (existingStudent) {
      return res.status(400).json({ message: 'Student already exists' });
    }

    // Hash the student's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if courses exist in the database
    const courses = await Course.find({ '_id': { $in: enrolled_courses } });

    if (courses.length !== enrolled_courses.length) {
      return res.status(400).json({ message: 'One or more courses not found' });
    }

    // Create the new student
    const newStudent = new Student({
      student_id,
      password: hashedPassword,
      enrolled_courses: courses
    });

    // Save the student to the database
    await newStudent.save();

    res.status(201).json({
      message: 'Student registered successfully',
      student: {
        student_id: newStudent.student_id,
        enrolled_courses: newStudent.enrolled_courses
      }
    });
  } catch (error) {
    console.error('Error registering student:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
