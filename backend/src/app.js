const express = require('express');
const connectDB = require('./utils/db');

const app = express();
connectDB();

app.use(express.json());
app.use('/api/evaluation', require('./routes/evaluationRoutes'));
// app.use('/api/questions', require('./routes/question.routes'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
