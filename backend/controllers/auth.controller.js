import express from 'express';
import bcrypt from 'bcrypt';
// import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken';
import Allusers from '../model/userModel.js'; 
//  we have a User model

// Login user
const login = async (req, res) => {
    const {email,password}=req.body;
   try {
      const Allusers=await User.findOne({email});
      if(!Allusers)return next(errorHandler(404,'user not found'))
      const validPassword=bcrypt.compareSync(password,Allusers.password);
   if (!validPassword) return next(errorHandler(401,'Wrong credentials!'))
   const token=jwt.sign({id:Allusers._id},process.env.JWT_SECRET);
   const {password:pass, ...rest}=Allusers._doc;
res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);

   } catch (error) {
      next(error)
   }
};

export default login;
