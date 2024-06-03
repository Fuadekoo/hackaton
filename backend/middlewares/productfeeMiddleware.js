// import jwt from "jsonwebtoken";
// import dotenv from 'dotenv';
// import express from 'express';
// import Allusers from '../model/userModel.js';
// import { performTransaction } from '../controllers/transaction.controller.js';
// import Product from "../model/productModel.js";

// dotenv.config();
// const app = express();
// const addRoomFee = 200; // Set the add room fee

// // Middleware to validate the token
// export default async (req, res, next) => {
//     try {
//         // Access the user ID from the request object
//         const userId = req.user.userId;
//         const {id}=req.params


//         const product = await Product.findById(id);
//         const owner = product.ownerUser.toString();  

//         const productName=product.productName;
//         const productType =product.productType;

//         const ProductPrice = product.EachProductPrice;

//         console.log(owner);

//         // Find the receiver from userowner from product table column and  id from allusers table  is  the same .whose role is seller in alluser table
//         const receiver = await Allusers.findOne({ _id: owner, role: "seller" });

//         if (!receiver) {
//             return res.status(400).json({
//                 message: "The receiver does not exist",
//                 success: false,
//                 data: null
                
//             });
//         }

//         // Get the receiver ID from the receiver object
//         const receiverId = receiver._id;
//         const fnameForReference= receiver.userName;
//         const marketType = receiver.marketType;
//         const TaxType =receiver.TaxType;

//         const 

//         const orderRefrence =`${fnameForReference}-tx-2862024-${quantity}`;

//         //to calculate the TOI VAT SURE EXCISE AND GUMURUK
//         const taxType = receiver.level;

//         const quantity = req.body;
//         const totalPayPrice = quantity * ProductPrice;

//         const GumurukValue ,ExciseValue,VATValue,SureValue ,TOTValue ,Total;

//         //to fetch the value of the type if the tax and its value for the selected product from the database
//          const TOT = product.TOT;
//           const VAT=product.VAT;
//           const Sure = product.Sure;
//           const Gumuruk=product.Gumuruk;
//           const Excise=product.Excise;
     
    
//         if(taxType=="standard"){
//              GumurukValue = totalPayPrice * Gumuruk;
//              ExciseValue =(GumurukValue + totalPayPrice) * Excise;

//              if(TaxType == "VAT"){
//              VATValue = (totalPayPrice +ExciseValue + GumurukValue ) * VAT;
//              SureValue=(totalPayPrice + GumurukValue +ExciseValue + VATValue) * Sure;

//              }
//               else if(TaxType == "TOT"){
//              TOTValue = (totalPayPrice +ExciseValue + GumurukValue ) * TOT;
//               SureValue=(totalPayPrice + GumurukValue +ExciseValue + TOTValue) * Sure;
//              }

//             Total = totalPayPrice +  GumurukValue + ExciseValue + VATValue + SureValue;
           
//         }

//         //   if(taxType=="exempt"){
//         //     GumurukValue = 0
//         //     ExciseValue 0

//         //     VATValue  0
//         //     TOTValue  0

//         //     SureValue  0
           

//         // }
//         //   else if(taxType:"reduced"){
//         //     GumurukValue = 2
//         //     ExciseValue 10

//         //     VATValue  5
//         //     TOTValue  2

//         //     SureValue  5
//         }


//         // enum:["standard","reduced","exempt"]


//         // Prepare the transaction data
//         const transactionData = {
//             orderId:orderRefrence,
//             productName:productName,
//             quantity:quantity,
//             sellerId:receiverId,
//             buyerId: userId,
//             productType:productType,
//             totalPrice: totalPayPrice,
//             singlePrice:ProductPrice,
//             totalTax:

//             sellerTIN:receiver.TXN,

//             type: "local Transfer"
//             // Add other necessary fields...
//         };
//         // Call the performTransaction function to perform the transaction
//         const response = await performTransaction(transactionData);


//         // Proceed to the next middleware function or the route handler
//         next();

//     } catch (error) {
//         res.status(500).json({
//             message: error.message,
//             success: false,
//             data: error.message,
//         });
//     }
// };