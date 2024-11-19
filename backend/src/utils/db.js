const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbUri = process.env.MONGO_URI || 'mongodb://localhost:27017/upscee';
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
