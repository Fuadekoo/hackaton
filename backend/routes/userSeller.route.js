import express from 'express';
import {addNewUser,salectAllUser,updateSeller} from '../controllers/userSeller.controller.js';//  Assuming you have a add new user controller defined
const router=express.Router();



// Register new user
router.post("/signup", addNewUser);
router.get("/allusers", salectAllUser);
router.put("/update-seler/:id",updateSeller)






export default router;
