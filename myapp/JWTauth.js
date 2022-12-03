var config= require('./config');
var jwt=require('jsonwebtoken');

exports.createToken= (user)=>{
    return jwt.sign(user, config.secretkey,
        {expiresIn: 3600});
}
exports.verfyToken= (req,res,next)=>{
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
        // console.log(token);
    if(!token){
        return res.json({status:"403",message:"forbidden"});
    }
    jwt.verify(token,config.secretkey,(err,decoded)=>{
        if(err){
            res.status=401;
        res.json({status:401,message:"Not a valid token"});
        }else{
            req.user=decoded;
            console.log(req);
        }
    })
   
    return next();

  
}