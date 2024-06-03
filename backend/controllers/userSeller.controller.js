import Allusers from '../model/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const addNewUser = async (req, res) => {
        const {marketType,TaxType,fullName,userName,companyName,TIN,capital,email,password,phonenumber,address,level} =req.body

    try {

        const existingUser = await Allusers.findOne({ email:email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
                success: false,
                data: null
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const sellerRole= "seller";

        const newUser = new Allusers({fullName:fullName,userName:userName,companyName:companyName,TIN:TIN,capital:capital,email:email,password:hashedPassword,phonenumber:phonenumber,address:address,role:sellerRole,level:level,TaxType:TaxType,marketType:marketType});
        await newUser.save();
        res.status(201).json({
            message: "seller created successfully",
            success: true,
            data: newUser
        });
    } 
    catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
            data: null
        });
    }
}
 
const salectAllUser = async(req,res)=>{
    try {
    const user= await Allusers.find({isBlocked:false}).sort({createdAt:-1 })    
    res.status(200).json(user)
    } catch (err) {
        res.status(400).json({error:err.message})
    }


}
//add the user

export {addNewUser,
    salectAllUser
};
