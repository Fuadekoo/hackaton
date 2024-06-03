import mongoose from 'mongoose';

const taxSchema = new mongoose.Schema({
       TaxType: {
        type: String,
        enum: ['VAT', 'TOT','Excise','Sure','GumurukTax'],
        required: true
    },
    Standard: {
        type:String,
        required: true
    },
    Reduced: {
        type:String,
        required: true
    },
},
{
    timestamps: true
}
);

const tax = mongoose.model('taxSchema', taxSchema);

export default tax;