import express from 'express';
import { transfermoneys,getTransactions,depositFunds } from '../controllers/transaction.controller.js';

import authMiddleware from '../middlewares/authMiddleware.js';
const router=express.Router();



// transfer money from one another
router.post("/transferMoney",authMiddleware, transfermoneys);


// get all transaction for a user
router.post("/get-all-transaction-by-user",authMiddleware, getTransactions);

// deposit the fund using stripe
router.post("/deposit",authMiddleware, depositFunds);


export default router;
