const express = require('express');
const app = express();
const cors = require('cors');  // Allow cross-origin requests
const connectDB = require('./db');
const evaluationRoutes = require('./routes/evaluationRoutes');

// Middleware
app.use(express.json());  // For parsing application/json
app.use(cors());  // Enable CORS for all routes

// Connect to the database
connectDB();

// Use the routes
app.use('/api/evaluations', evaluationRoutes);

// Set up the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
