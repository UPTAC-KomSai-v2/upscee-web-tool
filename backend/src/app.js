const express = require('express');
const mongoose = require('./utils/db'); // Connect to MongoDB
const cors = require('cors');
const evaluationRoutes = require('./routes/evaluationRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/evaluation', evaluationRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
