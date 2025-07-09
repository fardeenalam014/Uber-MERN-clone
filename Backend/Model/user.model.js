import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [2, "First name must be at least 2 characters long"],
            maxlength: [50, "First name must be at most 20 characters long"],
        },
        lastname: {
            type: String,

        }
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],
        select:false, // Exclude password from queries by default
    },
    sockedId: {
        type: String,
        
    },
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET);
    return token;
};
userSchema.statics.hashpassword =async function(password){
 return await bcrypt.hash(password,10);
}
userSchema.methods.comparepassword =async function(password){
    return await bcrypt.compare(password, this.password);
}
const userModel =mongoose.model("UberUser",userSchema);

export default userModel;