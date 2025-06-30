import express from "express"

let app =express()

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

app.get('/',(req,res)=>{
    res.send("hello world sgsdgsd")
})