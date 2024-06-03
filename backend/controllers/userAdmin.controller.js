import Allusers from '../model/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const addNewUser = async (req, res) => {
        const {companyName,TIN,capital,email,password,phonenumber,address,role,level} =req.body

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
        const adminRole="Admin"

        const newUser = new Allusers({fullName:fullName,userName:userName,email:email,password:hashedPassword,phonenumber:phonenumber,address:address,role:adminRole});
        await newUser.save();
        res.status(201).json({
            message: "admin created successfully",
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
