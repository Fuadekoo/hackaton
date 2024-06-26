import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import productRouter from './routes/product.route.js'
import connectDB from './config/dbConfig.js';
import userSellerRouter from './routes/userSeller.route.js'
import userBuyerRouter from './routes/userBuyer.route.js'
import userAdminRouter from './routes/userAdmin.route.js'
import authRouter from './routes/auth.route.js'

const app = express();
dotenv.config();
//chane for test
app.use(express.json());
app.use(cookieParser());


<<<<<<< HEAD
// middleware
app.use('/api/product',productRouter);

// middleware
app.use('/api/userSeller',userSellerRouter);
app.use('/api/userAdmin',userAdminRouter);
app.use('/api/userBuyer',userBuyerRouter);

// this is auth middleware 
app.use('/api/auth',authRouter);



=======
// middleware
>>>>>>> 896648305ac3d94e286bbfba3a879b292ad5eac1
// error handlers middleware
// app.use(errorHandlerMiddleware);
// listen to server

const PORT = process.env.PORT || 56000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

