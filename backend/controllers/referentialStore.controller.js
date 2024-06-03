import referential from '../model/referentialStoreModel.js'
import Allusers from '../model/userModel.js'; // Assuming you have a userModel.js as well
import mongoose from 'mongoose';

const verifyAccountNumber = async (req, res) => {
    try {
        const user = await Allusers.findOne({ _id: req.body.receiver });

        if (user) {
            res.send({
                message: "Account number verified successfully",
                success: true,
                data: user,
            });
        }
        else {
            res.send({
                message: "Account number not found",
                success: false,
                data: null,
            });
        }
    }
    catch(error){
        res.status(500).json({
            message: error.message,
            success: false,
            data: error.message,
        });
    }
};
const AddReferiancial = async (req, res) => {
      // Access the user ID from the request object
      const { userId: ownerUser} = req.user;
      
      
      

      const { orderId,referentialExpired,TaxType, discription, quantity,productType} = req.body;

}
