import mongoose from "mongoose"
import dotenv from 'dotenv';
// create a user schema

const userSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    referentialExpired:{
        type:Boolean,
        default:false
    },
    taxtype: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tax'
    }],

},
{timestamps:true});

const Allusers = mongoose.model('ReferentialStore', userSchema);

export default Allusers;
