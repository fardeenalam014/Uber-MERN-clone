import mongoose from "mongoose";
import userModel from "../Model/user.model.js";
import {createUser} from "../Services/user.services.js";



 export const registerUser = async (req,res)=>{
    console.log(req.body)
    const {fullname,email,password}=req.body;
    try{
        const user =await createUser({fullname,email,password})
        const token =user.generateAuthToken();
        // localStorage.setItem("uberToken",token);
        res.status(201).json({
            success:true,
            message:"User created successfully",
            user,
            token
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }


}

export const loginUser =async (req ,res)=>{

    console.log(req.body);
    const {email,password}=req.body;
    try{
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        }
        const user = await userModel.findOne({email}).select('+password');
        if(!user ){
            return res.status(401).json({
                success:false,
                message:"Invalid email or password",
            })
        }
        console.log(user)
        
       
        const isPasswordValid =await user.comparepassword(password);
        console.log(isPasswordValid)

        if(!isPasswordValid){
            return res.status(401).json({
                success:false,
                message:"Invalid email or password",
            })

        }
        const token =user.generateAuthToken();
        // localstorage.setItem("uberToken",token);
        res.status(200).json({
            success:true,
            message:"User logged in successfully",
            user,
            token,
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }

}

export const getProfile = async (req,res)=>{
    const user = req.user;
    console.log(user)
    res.status(200).json({
        success:true,
        message:"User profile fetched successfully",
        user,
    })
}


