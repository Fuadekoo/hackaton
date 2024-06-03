
import express from 'express';
import {AddProduct} from '../controllers/product.controller.js'
import authMiddleware from '../middlewares/authMiddleware.js'
const router=express.Router();

router.post('/addProducts',authMiddleware,AddProduct)  //to add the new product to the database

export default router;
