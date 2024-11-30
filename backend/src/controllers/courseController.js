const Course = require('../models/Course');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Function to handle CSV file upload and course creation
exports.uploadCourses = async (req, res) => {
  try {
    const file = req.file;  // Assuming you're using multer or another middleware for file upload

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const courses = [];
    const filePath = path.join(__dirname, '../uploads', file.filename);

    // Stream and parse the CSV file
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        // Assuming CSV has columns: subject, section, units, schedule, teacher
        const { subject, section, units, schedule, teacher } = row;

        if (subject && section && units && schedule && teacher) {
          courses.push({
            subject,
            section,
            units: parseInt(units), // Convert units to number
            schedule,
            teacher,
          });
        }
      })
      .on('end', async () => {
        // Save courses to the database
        await Course.insertMany(courses);

        // Delete the uploaded file after processing
        fs.unlinkSync(filePath);

        res.status(201).json({ message: 'Courses uploaded and saved successfully' });
      })
      .on('error', (err) => {
        console.error('Error parsing CSV file:', err);
        res.status(500).json({ message: 'Error parsing CSV file' });
      });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
