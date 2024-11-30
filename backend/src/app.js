const express = require('express');
const connectDB = require('./utils/db');
const app = express();

connectDB();  // Connect to the database

// Middleware
app.use(express.json());

// Routes
app.use('/api/evaluation', require('./routes/evaluationRoutes'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/students', require('./routes/studentRoutes'));

// Server setup
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
