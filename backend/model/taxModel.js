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

const taxmodel = mongoose.model('Tax', taxSchema);

export default taxmodel;