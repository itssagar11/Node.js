var express = require('express');
var User= require('../models/user');
var bodyParser=require('body-parser');



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
router.post('/signup',(req,resp,next)=>{
  console.log("signup")
    User.findOne({username:req.body.username})
    .then((user)=>{
      if(user!=null){
        var err= new Error('Username already exist!');
        err.status=403;
        next(err);
      }else{
          return User.create({
            username:req.body.username,
            password:req.body.password
          })
      }
    })
    .then((user)=>{
      resp.statusCode = 200;
      resp.setHeader('Content-Type', 'application/json');
      resp.json({status: 'Registration Successful!', user: user});
    },(err)=>nexr(err))
    .catch((err)=>next(err));

});


let auth= (req,resp,next)=>{
     
  let authHeader = req.headers.authorization;
  console.log(authHeader);
  if(!authHeader){

    let err= new Error('Authentication Required!');
    err.status=401;
    resp.setHeader('WWW-Authenticate','Basic');
    next(err);
    return;
  }else{

    let auth = new Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':');
    let username= auth[0];
    let password= auth[1];
    console.log(username, " ",password);
    User.findOne({username:username})
    .then((user)=>{
      if(user==null){
        var err = new Error('Invalid Username');
        err.status = 403;
         next(err);
      }else{
        if(username==user.username && password==user.password){
          req.session.user='authenticated';
          next();
        }else{
    
          let err= new Error(' Invalid! Password');
          err.status=401;
          resp.setHeader('WWW-Authenticate','Basic');
          next(err);
          return;
        }
      }
    })
    .catch((err)=>next(err));
    
  }


}
router.post('/login',(req,resp,next)=>{
  if(!req.session.user){
    auth(req,resp,next);
  }else{
    resp.statusCode=200;
    resp.setHeader('Content-Type','text/plain');
    resp.end('You are already authenticated');
  }

 







})


module.exports = router;
