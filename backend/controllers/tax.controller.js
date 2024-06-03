import Tax from '../model/taxModel.js'



    const AddTaxVlue = async (req, res) => {
       const { standardGumuruk ,standardTOT ,standardSure,
              ReducedExcise, ReducedGumuruk, ReducedTOT, ReducedSure,
              ExemptExcise, ExemptGumuruk,  ExemptTOT, ExemptSure ,
              StandardExciseAlcohol,StandardExciseCar,StandardExciseTubaco } =req.body

    try {
    
        // Create the new tax value
        const TaxData = await Tax.create({
             standardGumuruk:standardGumuruk,
             standardTOT:standardTOT,
             standardSure:standardSure,
             ReducedExcise:ReducedExcise,
             ReducedGumuruk:ReducedGumuruk,
             ReducedTOT:ReducedTOT,
             ReducedSure:ReducedSure,
             ExemptExcise:ExemptExcise,
             ExemptGumuruk:ExemptGumuruk,
             ExemptTOT:ExemptTOT,
             ExemptSure:ExemptSure,
             StandardExciseAlcohol:StandardExciseAlcohol,
             StandardExciseCar:StandardExciseCar,
             StandardExciseTubaco:StandardExciseTubaco

        });

        res.status(200).json({ message: "product created successfully", success: true, data: TaxData });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false, data: null });
    }
};

export {AddTaxVlue,
};
