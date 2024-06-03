import mongoose from "mongoose"
import dotenv from 'dotenv';
// create a user schema

const userSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    TIN:{
        type:String,
        default:""
    },
    capital:{
        type:String,
    },
     email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
        lowercase: true, // Convert email to lowercase
        match: /^\S+@\S+\.\S+$/, // Validate email format
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
  
    role: {
        type: String,
        enum: ['buyer', 'seller'],
        required:true
    },
    Auditor:{
        type:Boolean,
        default:false
    },
    active: {
        type: Boolean,
        default: true
    },
    level:{
        type:String,
        enum:["standard","reduced","exempt"]
    },
    
    taxtype: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tax'
    }],

},
{timestamps:true});

const Allusers = mongoose.model('Allusers', userSchema);

export default Allusers;
