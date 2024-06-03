import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
     orderId:{
        type: mongoose.Schema.Types.ObjectId, // Change the type to ObjectId=
        ref:'ReferentialStore',
        required:true
    },

    productName:{
        type: mongoose.Schema.Types.ObjectId, // Change the type to ObjectId
        ref:'Product',
        required:true,
    },
    quantity: {
        type: Number,
        required: true
    },
    buyerId: {                              
        type: mongoose.Schema.Types.ObjectId, // Change the type to ObjectId
        ref: 'AllUsers', // Assuming there is a User model
        required: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId, // Change the type to ObjectId
        ref: 'AllUsers', // Assuming there is a User model
        required: true
    },
    productType: {
        type:String,
        required:true
    },

    totalPrice: {
        type: Number,
        required: true
    },

    singlePrice:{
          type: Number,
        required: true
    },

    totalTax: {
         type: Number,
        required: true
    },

   sellerTIN: {
    type:String,
    required:true
   },

   TOTValue:{
    type:Number,
   },

    VATValue:{
    type:Number,
   },

  SureValue:{
    type:Number,
   },

    ExciseValue:{
    type:Number,
   },

    GumurukValue:{
    type:Number,
   }
   
},
{
    timestamps: true
}
);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;