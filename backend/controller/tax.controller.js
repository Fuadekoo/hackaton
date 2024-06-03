import taxmodel from '../model/taxModel.js';
import dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// import { v4 as uuid } from 'uuid';

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

// deposit funds using stripe
const depositFunds = async (req, res) => {
    try {
        const {token, amount} = req.body;
        // create a customer
        const customer = await stripe.customers.create({
            email: token.email, 
            source: token.id,
        });
        
        // create a charge
        const charge = await stripe.charges.create({
            amount: amount,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: 'Deposit funds to local account',
        },
        {
            idempotencyKey: uuid(),
        }
    );

    // save the transaction 
    if(charge.status === 'succeeded'){
        const newTransaction = new Transaction({
            sender: req.body.userId,
            receiver: req.body.userId,
            amount: req.body.amount,
            type: 'deposit',
            reference: "stripe deposit",
            status: 'completed',
        });
        await newTransaction.save();

        // increase the amount of the user
        const user = await Allusers.findByIdAndUpdate(req.body.userId, {
            $inc: {balance: amount},
        });
        res.send({
            message: "Funds deposited successfully",
            success: true,
            data: newTransaction,
        });
        
    }
    else {
        res.send({
            message: "Funds not deposited",
            success: false,
            data: charge,
        });
    }

    }
    catch(error){
        res.status(500).json({
            message: error.message,
            success: false,
            data: error.message,
        });
    }};


// deposit funds using chapa

    



export { transfermoneys,performTransaction, verifyAccountNumber, getTransactions, depositFunds };





import mongoose from 'mongoose';

const taxSchema = new mongoose.Schema({
   TaxType: {
        type: String,
        enum: ['VAT', 'TOT','Excise','Sure','GumuruTax'],
        required: true
    },
    Standard: {
        type: String,
        required: true
    },
    Reduced: {
        type: String,
        required: true
    },
},
{
    timestamps: true
}
);

const taxmodel = mongoose.model('taxs', taxSchema);

export default taxmodel;