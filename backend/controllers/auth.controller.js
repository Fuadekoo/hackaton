import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Allusers from '../model/userModel.js'; //  we have a User model

// Login user
const login = async (req, res) => {
    try {
        const userExists = await Allusers.findOne({ email: req.body.email });
        if (!userExists) {
            return res.send({
                message: 'User doesn\'t exist',
                success: false,
                data: null,
            });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, userExists.password);
        if (!passwordMatch) {
            return res.send({
                message: 'Incorrect password',
                success: false,
                data: null,
            });
        }

        // Generate token to login, process.env.jwt_secret is the secret key
        const token = jwt.sign(
            {
                userId: userExists._id,
            },
            process.env.jwt_secret,
            { expiresIn: '1d' }
        );

        res.send({
            message: 'User logged in successfully',
            success: true,
            data: token,
        });
    } catch (error) {
        res.send({
            message: error.message,
            success: false,
            data: null,
        });
    }
};

export default login;
