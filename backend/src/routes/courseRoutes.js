const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadCourses, getAllCourses } = require('../controllers/courseController');

// Set up multer to handle file uploads
const upload = multer({ dest: 'src/uploads/' });

// Route for uploading CSV file with courses
router.post('/upload', upload.single('file'), uploadCourses);

// Route for fetching all courses
router.get('/', getAllCourses);

module.exports = router;
