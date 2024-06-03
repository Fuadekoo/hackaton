import mongoose from 'mongoose';
import dotenv from 'dotenv';
//hi bro
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

export default connectDB();