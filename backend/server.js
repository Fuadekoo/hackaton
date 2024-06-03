import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/dbConfig.js';

const app = express();
dotenv.config();
//chane for test
app.use(express.json());
app.use(cookieParser());



// middleware



// error handlers middleware
// app.use(errorHandlerMiddleware);


// listen to server
<<<<<<< HEAD
const PORT = process.env.PORT || 56000;
=======
const PORT = process.env.PORT || 6000;
>>>>>>> 19ad067f4b80b574e53c47843201efa2423a44d1
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

