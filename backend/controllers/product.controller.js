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
        // const productType: checkUser.taxtype.toString()
          
        }

        // assign to admin price 10% of the price of the room
    
1
        // Create the new room
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


// const SelectAllRooms =async(req,res)=>{
//     try {
        
//     const room = await Rooms.find({}).sort({createdAt: -1})
//     if(room.length >0){
//      res.status(200).json({room}) 
//     }
//     else{
//         res.status(400).json({message:"there is no room currently"})
//     }

//     } catch (err) {
//         res.status(400).json({error:err.message})
        
//     }

// }


// const selectMyPostedRoom=async(req,res)=>{
//     const {id}= req.params

//     const myRoom= await Rooms.find({}).sort({createdAt:-1})
//     if(myRoom.ownerUser==id){
//         res.status(500).json({myRoom})
//     }

//     else {
//         res.status(400).json({error:"there is no room for you"})
//     }

// }
// const SelectNoneAllowedRooms =async(req,res)=>{    /// no permitted/ noe allowed by admin
//     try {
        
//     const room = await Rooms.find({allowed:false}).sort({createdAt: -1})
    
//     if(room.length > 0){
//       res.status(200).json({room}) 
//     }
//     else{
//         res.status(400).json({message:"The None  Permitted room is not exist"})
//     }


//     } catch (err) {
//         res.status(400).json({error:err.message})
        
//     }

// }


// const publicAllowedRooms =async(req,res)=>{
    
//     try {
//     const allowedRooms = await Rooms.find({allowed:true ,freeToRent:true}).sort({createdAt:-1})
//     if(allowedRooms.length > 0){
//         res.status(200).json({rooms:allowedRooms})
//     }
//     else{
//         res.status(400).json({message:"there is not any allowed room for the public access"})
//     }
//     } catch (error) {
//         res.status(500).json({error:error.message})
//     }
// }



// const selectSingleRoom = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ error: 'Invalid room ID' });
//     }

//     try {
//         const room = await Rooms.findById(id);

//         if (!room) {
//             return res.status(404).json({ error: 'the room is not found' });
//         }

//         return res.status(200).json({ room });
//     } catch (error) {
//         console.error('Error fetching user:', error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// const SelectNoneFreeForRentRooms =async(req,res)=>{    /// no permitted/ not free for rent  by landlord
//     try {
        
//     const room = await Rooms.find({freeToRent:false}).sort({createdAt: -1})
    
//     if(room.length > 0){
//       res.status(200).json({room}) 
//     }
//     else{
//         res.status(400).json({message:"There is not room which is not deny from the rent "})
//     }


//     } catch (err) {
//         res.status(400).json({error:err.message})
        
//     }

// }


// const SelectFreeForRentRooms =async(req,res)=>{    /// no permitted/ not free for rent  by landlord
//     try {
        
//     const room = await Rooms.find({freeToRent:true}).sort({createdAt: -1})
    
//     if(room.length > 0){
//       res.status(200).json({room}) 
//     }
//     else{
//         res.status(400).json({message:"There is not room which is not deny from the rent "})
//     }


//     } catch (err) {
//         res.status(400).json({error:err.message})
        
//     }

// }

// const updateRoom=async(req,res)=>{

//     const {id} =req.params
//      if(!mongoose.Types.ObjectId.isValid(id))
//      return res.status(404).json({error:"there is no such room id in the db"})


//     try {
//     const readyRoom = await Rooms.findByIdAndUpdate({_id:id},{...req.body})
//     if(!readyRoom){
//         return res.status(400).json({error:"there is something wrong to update the current room"})
//     }
//     res.status(200).json(readyRoom)
        
//     } catch (error) {
//         res.status(400).json({error:error.message})
        
//     }
// }



// const makeAllowedRoom = async(req,res)=>{  /// permitted by admin allowed:true
//     const {id} =req.params
//       if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error:"room to allow id is not exist"})
//     }

//     try {

//         const room = await Rooms.findById(id)

//         if(!room)
//             return res.status(400).json({error:"the room does not exist"})
        

//         const newAllowedRoom = !room.allowed  // Toggle allowed status (true -> false, false -> true)

//         const updateToAllowed = await Rooms.findByIdAndUpdate(id, {allowed:newAllowedRoom} , {new:true});
//         res.status(200).json({message:"the room is successfully allowed to access for the market" ,updateToAllowed})
        
//     } catch (error) {
//         res.status(500).json({error:"there is an internal server error"})
        
//     }
    
// }



// const makeFreeForRent = async(req,res)=>{
//     const {id} =req.params
//       if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error:"room to allow id is not exist"})
//     }

//     try {

//         const room = await Rooms.findById(id)

//         if(!room)
//             return res.status(400).json({error:"the room does not exist for make it free for Rent"})
        

//         const newForRent = !room.freeToRent  // Toggle freeToRent status (true -> false, false -> true)

//         const updateForRent = await Rooms.findByIdAndUpdate(id, {freeToRent:newForRent} , {new:true}); //dear programmer even though the default value is true or false make the new:true   always
//         res.status(200).json({message:"the room  is free for rent by LandLord" ,updateForRent})
        
//     } catch (error) {
//         res.status(500).json({error:"there is an internal server error"})
        
//     }
    
// }


export {AddProduct,
    };