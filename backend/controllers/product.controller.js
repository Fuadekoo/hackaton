import Product from '../model/productModel.js'
import Allusers from '../model/userModel.js'; // Assuming you have a userModel.js as well
import mongoose from 'mongoose';


const AddProduct = async (req, res) => {
      // Access the user ID from the request object
      const { userId: ownerUser} = req.user;
      
      

      const { avatarImage,productName,TaxType, discription, quantity,productType} = req.body;
    try {
        // Check if the owner user exists
        const checkUser = await Allusers.findOne({ _id: ownerUser ,role:"seller"});
        if (!checkUser) {
            return res.status(400).json({ message: "The user does not exist or you are not 'seller'", success: false, data: null });
        }

        // Create the new product
        const ProductData = await Product.create({
            avatarImage: avatarImage,
            productName: productName,
            productType: productType,
            quantity: quantity,
            discription: discription,
            TIN:checkUser.TIN,
            TaxType:TaxType,
            ownerUser: ownerUser

        });

        res.status(200).json({ message: "product created successfully", success: true, data: ProductData });
    } catch (error) {
        res.status(500).json({ message: error.message, success: false, data: null });
    }
};

export {AddProduct,
    };