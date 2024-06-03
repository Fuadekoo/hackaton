import express from 'express';
import {addNewUser,salectAllUser} from '../controllers/userAdmin.controller.js';//  Assuming you have a add new user controller defined
const router=express.Router();



// Register new user
router.post("/signup", addNewUser);
router.get("/allusers", salectAllUser);






export default router;
