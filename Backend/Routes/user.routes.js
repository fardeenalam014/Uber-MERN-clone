// import express from 'express'
import {Router } from 'express'
import { registerUser,loginUser,getProfile } from '../Controller/user.controller.js'
import{userAuthenticateToken} from '../middlewares/user.authenticateToken.js'

const router =Router();
router.post('/register',registerUser)
router.post('/login',loginUser)
// router.get('/logout',logoutUser)
router.get('/profile',userAuthenticateToken,getProfile)


export default router;
