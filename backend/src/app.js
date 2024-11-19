const express = require('express');
const connectDB = require('./utils/db');
require('dotenv').config();

const app = express();

app.use(express.json());

// Import routes
const evaluationRoutes = require('./routes/evaluationRoutes');

// Use routes
app.use('/api/evaluation', evaluationRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectDB(); // Connect to the database
