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
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Allusers', // Reference to the User model
       required:true
    },

    productName: {
        type: String,
        required: true
    },
    productType:{
       type:String,
       enum:['Alcohol','Car','Tubaco','other'],
       required:true

        
    },   
    EachProductPrice:{
        type:Number,
        required:true
    } ,

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
    },

    TOT:{
        type:Number,
    },
    VAT:{
        type:Number,
    },
    Sure:{
        type:Number,
    },

    Gumuruk:{
        type:Number,
    },

     Excise:{
        type:Number,
    }
},
{timestamps:true});

const Allusers = mongoose.model('Product', userSchema);

export default Allusers;
