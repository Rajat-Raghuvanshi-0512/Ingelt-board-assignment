import mongoose from 'mongoose';
const MONGO_URL = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ingelt'; // DB URI

export const connectToDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('Connected to database');
  } catch (error) {
    console.log(error);
  }
};
