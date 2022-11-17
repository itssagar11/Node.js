var express = require('express');
var User= require('../models/user');
var bodyParser=require('body-parser');
var passport=require('passport');



var router = express.Router();
router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/logout',(req,resp,next)=>{
  console.log(req.body)
  if(req.session){
    req.session.destroy();
    resp.clearCookie('login');
    resp.end("logout");
  }else{
    
    resp.end("already  logout");
  }
})
router.post('/signup',(req,res,next)=>{
  console.log("signup")
    User.register(new User({username:req.body.username}),req.body.password,(err,user)=>{
      if(err){
      res.statusCode=500;
      res.setHeader('Content-Type','application/json');
      res.json({err:err});
      }else{
        passport.authenticate('local')
        (req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      }
    })});


// let auth= (req,resp,next)=>{
     
//   let authHeader = req.headers.authorization;
//   console.log(authHeader);
//   if(!authHeader){

//     let err= new Error('Authentication Required!');
//     err.status=401;
//     resp.setHeader('WWW-Authenticate','Basic');
//     next(err);
//     return;
//   }else{

//     let auth = new Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':');
//     let username= auth[0];
//     let password= auth[1];
//     console.log(username, " ",password);
//     User.findOne({username:username})
//     .then((user)=>{
//       if(user==null){
//         var err = new Error('Invalid Username');
//         err.status = 403;
//          next(err);
//       }else{
//         if(username==user.username && password==user.password){
//           req.session.user='authenticated';
//           next();
//         }else{
    
//           let err= new Error(' Invalid! Password');
//           err.status=401;
//           resp.setHeader('WWW-Authenticate','Basic');
//           next(err);
//           return;
//         }
//       }
//     })
//     .catch((err)=>next(err));
    
//   }


// }
router.post('/login',passport.authenticate('local'),(req,resp,next)=>{
  console.log(req);
    resp.statusCode=200;
    resp.setHeader('Content-Type','text/plain');
    resp.end('authenticated');
    

})


module.exports = router;
