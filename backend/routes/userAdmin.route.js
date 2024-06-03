import express from 'express';

import {addNewUser,salectAllUser,updateAdmin} from '../controllers/userAdmin.controller.js';//  Assuming you have a add new user controller defined
import roleCheckMiddleware from '../middlewares/adminCheckerMiddleware.js';
const router=express.Router();



// Register new Adminuser
router.post("/signup",roleCheckMiddleware, addNewUser);
router.get("/allusers", salectAllUser);
router.put("/update-admin/:id",updateAdmin);






export default router;
