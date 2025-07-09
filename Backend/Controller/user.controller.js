import mongoose from "mongoose";
import userModel from "../Model/user.model.js";
import {createUser} from "../Services/user.services.js";

// import 

 export const registerUser = async (req,res)=>{
    console.log(req.body)
    const {fullname,email,password}=req.body;
    try{
        const user =await createUser({fullname,email,password})
        res.status(201).json({
            success:true,
            message:"User created successfully",
            user,
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }


}

