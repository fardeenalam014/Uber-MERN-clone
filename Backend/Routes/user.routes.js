// import express from 'express'
import {Router } from 'express'
import { registerUser } from '../Controller/user.controller.js'

const router =Router();
router.post('/register',registerUser)
// router.get('/login',(req,res)=>{
//     res.send("login route")
   
// })
// router.post('/login',(req,res)=>{
//     res.send("login route")
//     console.log(req.body)
// })
// router.post('/register',registerUser)
// router.post('/login',loginUser)
// router.get('/logout',logoutUser)
// router.get('/profile',getProfile)
// router.put('/update',updateProfile)
// router.delete('/delete',deleteUser)

export default router;
