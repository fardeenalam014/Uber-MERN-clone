import jwt from "jsonwebtoken";




export const userAuthenticateToken =  function(req,res,next){
    
    const authHeader = req.headers['authorization'];
    
    const token =authHeader && authHeader.split(' ')[1];
    console.log(token)
    if(!token){
        return res.status(401).json({
            success:false,
            message:"unauthorized access",
        })
    }
    try{
        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err){
                return res.status(403).json({
                    success:false,
                    message:"invalid token",
                })
            }
            req.user = user;
        })
        
  
        next();
    
    
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }

   
}
