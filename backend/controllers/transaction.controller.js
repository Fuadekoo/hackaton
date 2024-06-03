import express from 'express';
import Transaction from '../model/transactionModel.js';
import Allusers from '../model/userModel.js';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import {uuid} from 'uuidv4';

dotenv.config();

// Refactored transfermoney function
const performTransaction = async (transactionData) => {
    try {
        // Fetch the sender's current balance
        const senders = await Allusers.findById(transactionData.sender);

        // Check if the sender's balance is less than the transaction amount
        if (senders.balance < transactionData.amount) {
            throw new Error("Insufficient balance");
        }

        // save the transaction
        const newTransaction = new Transaction(transactionData);
        await newTransaction.save();

        // decreases the amount of the sender
        const sender = await Allusers.findByIdAndUpdate(transactionData.sender, {
            $inc: {balance: -transactionData.amount},
        });

        // increases the amount of the receiver
        const receiver = await Allusers.findByIdAndUpdate(transactionData.receiver, {
            $inc: {balance: transactionData.amount},
        });

        return {
            message: "Transaction successful",
            data: newTransaction,
            success: true,
        };
    } catch (error) {
        throw error;
    }
};

// Express.js route handler
const transfermoney = async (req, res) => {
    try {
        const result = await performTransaction(req.body);
        res.send(result);
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
            data: error.message,
        });
    }
};


// transfer money from one another
const transfermoneys = async (req, res) => {
    try{
        // Fetch the sender's current balance
        const senders = await Allusers.findById(req.body.sender);

        // Check if the sender's balance is less than the transaction amount
        if (senders.balance < req.body.amount) {
            return res.status(400).json({
                message: "Insufficient balance",
                success: false,
            });
        }


        // save the transaction
        const newTransaction = new Transaction(req.body);
       await newTransaction.save();

    //    decreases the amount of the sender
    const sender = await Allusers.findByIdAndUpdate(req.body.sender, {
        $inc: {balance: -req.body.amount},
    });

    // increases the amount of the receiver
    const receiver = await Allusers.findByIdAndUpdate(req.body.receiver, {
        $inc: {balance: req.body.amount},
    
    });

    res.send({
        message: "Transaction successful",
        data: newTransaction,
        success: true,
        });


    }
    catch(error){
        res.status(500).json({
            message: error.message,
            success: false,
            data: error.message,
        });
    }
};

// verify receiver account number
const verifyAccountNumber = async (req, res) => {
    try {
        const user = await Allusers.findOne({ _id: req.body.receiver });

        if (user) {
            res.send({
                message: "Account number verified successfully",
                success: true,
                data: user,
            });
        }
        else {
            res.send({
                message: "Account number not found",
                success: false,
                data: null,
            });
        }
    }
    catch(error){
        res.status(500).json({
            message: error.message,
            success: false,
            data: error.message,
        });
    }
};

// get all transactions for a user
const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ 
            $or: [{ sender: req.body.userId }, { receiver: req.body.userId }],
        });

        res.send({
            message: "Transactions retrieved successfully",
            success: true,
            data: transactions,
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message,
            success: false,
            data: error.message,
        });
    }
};


export { transfermoneys,performTransaction, verifyAccountNumber, getTransactions, depositFunds };