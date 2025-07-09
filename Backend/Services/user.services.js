import userModel from "../Model/user.model.js";




export const createUser =async ({fullname,email,password})=>{
    if(!fullname.firstname||!email||!password){
        throw new Error("All fields are required ")
    }
    const existingUser=await userModel.findOne({email})
    if(existingUser){
        throw new Error("User already exists");

    }
    const hashedPassword = await userModel.hashpassword(password);
    const user =await userModel.create({
        fullname:{
            firstname:fullname.firstname,
            lastname:fullname.lastname,
        },
        email,
        password :hashedPassword,

    });
    return user;

}