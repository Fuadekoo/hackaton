import mongoose from "mongoose"
import dotenv from 'dotenv';
// create a refential schema

const userSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    referentialExpired:{
        type:Boolean,
        default:false
    },
    taxtype: {
        type:String,
    }

}, 
{timestamps:true});

const Allusers = mongoose.model('ReferentialStore', userSchema);

export default Allusers;
