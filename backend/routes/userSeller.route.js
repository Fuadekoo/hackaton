import express from 'express';
import {addNewUser,salectAllUser} from '../controllers/userSeller.controller.js';//  Assuming you have a add new user controller defined
const router=express.Router();



// Register new user
router.post("/signup", addNewUser);
router.get("/allusers", salectAllUser);
router.put("/update-seler/:id")






export default router;
