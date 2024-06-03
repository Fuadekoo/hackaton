import mongoose from "mongoose"
import dotenv from 'dotenv';
// create a product schema

const userSchema = new mongoose.Schema({

      avatarImage:{
        type: String,
        required:true
    },
    ownerUser:{
        type:String,
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref: 'Allusers', // Reference to the User model
       required:true
    },

    productName: {
        type: String,
        required: true
    },
    productType:{
       type:String,
       required:true

        
    },    
    quantity: {
        type: Number,
        default: 0
    },
    discription: {
        type: String,
    },
  
    
    TIN:{
        type:String,
        required:true
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Allusers'
    },
   
    TaxType: {
        type:String,
        required:true
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Tax'
    },

},
{timestamps:true});

const Allusers = mongoose.model('Product', userSchema);

export default Allusers;
