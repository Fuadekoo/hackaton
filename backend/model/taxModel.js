import mongoose from 'mongoose';

const taxSchema = new mongoose.Schema({
        StandardExciseAlcohol:{
            type:Number
        },
        StandardExciseCar:{
            type:Number
        },
        StandardExciseTubaco:{
            type:Number
        },
        standardGumuruk:{
        type:Number
       },
       
       standardTOT:{
        type:Number
       },
       standardSure:{
        type:Number
       },

        ReducedExcise:{
        type:Number
       },
       ReducedGumuruk:{
        type:Number
       },
      ReducedSure:{
        type:Number
       },
       ReducedTOT:{
        type:Number
       },
       
      ExemptExcise:{
        type:Number
       },
       ExemptGumuruk:{
        type:Number
       },
       ExemptSure:{
        type:Number
       },
      ExemptTOT:{
        type:Number
       },
},
{
    timestamps: true
}
);

const tax = mongoose.model('Tax',taxSchema);

export default tax;