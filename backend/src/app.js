require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Basic health check endpoint
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
