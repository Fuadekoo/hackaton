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
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

