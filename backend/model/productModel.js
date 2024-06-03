import mongoose from "mongoose"
import dotenv from 'dotenv';
// create a user schema

const userSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productType:{
        type:String,
    },    
    quantity: {
        type: Number,
        default: 0
    },
    discription: {
        type: String,
    },
  
    
    TIN:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Allusers'
    },
   
    taxtype: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tax'
    }],

},
{timestamps:true});

const Allusers = mongoose.model('Product', userSchema);

export default Allusers;
