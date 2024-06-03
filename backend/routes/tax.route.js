
import express from 'express';
import {AddTaxVlue} from '../controllers/tax.controller.js'

const router=express.Router();

router.post('/addTax',AddTaxVlue)  //to add the new room to the database

export default router;
