import express from 'express';
import {addNewUser,salectAllUser,updateBuyer} from '../controllers/userBuyer.controller.js';//  Assuming you have a add new user controller defined
const router=express.Router();



// Register new user
router.post("/signup", addNewUser);
router.get("/allusers", salectAllUser);
router.put("/update-buyer/:id",updateBuyer)






export default router;
