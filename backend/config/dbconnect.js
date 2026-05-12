const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Adding a fallback URI ensures it doesn't crash even if .env is empty
    const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/howtostudy';
    
    await mongoose.connect(uri);
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('MongoDB Connection Failed:', error.message);
  }
};

module.exports = connectDB;
