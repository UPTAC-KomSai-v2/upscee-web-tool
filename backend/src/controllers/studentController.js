const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

exports.loginStudent = async (req, res) => {
  const { student_id, password } = req.body;

  // Validate input
  if (!student_id || !password) {
    return res.status(400).json({ message: 'Student ID and password are required' });
  }

  try {
    // Find the student by student_id
    const student = await Student.findOne({ student_id });
    if (!student) {
      return res.status(400).json({ message: 'Invalid student ID' });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { student_id: student.student_id, id: student._id },
      process.env.JWT_SECRET || 'your_jwt_secret_key',
      { expiresIn: '1h' }
    );

    // Return the token and student info (excluding password)
    res.json({
      message: 'Login successful',
      token,
      student: {
        student_id: student.student_id,
        enrolled_courses: student.enrolled_courses
      }
    });
  } catch (error) {
    console.error('Error logging in student:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
