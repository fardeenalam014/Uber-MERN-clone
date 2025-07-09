import dotenv from "dotenv"
dotenv.config();
import express from "express"
import connectDB from "./Database/db.js"
import router from "./Routes/user.routes.js"
let app =express()

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 3000")

})

app.use("/users",router)

app.get('/',(req,res)=>{
    res.send("hello world sgsdgsd")
})