
import express from 'express';
import {AddProduct} from '../controllers/product.controller.js'
const router=express.Router();

router.post('/addProducts',AddProduct)  //to add the new room to the database

export default router;
