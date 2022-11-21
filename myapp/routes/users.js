var express = require('express');
var User= require('../models/user');
var bodyParser=require('body-parser');
var passport=require('passport');
var jwt= require('../JWTauth');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
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
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
       
      }
    })});

router.post('/login',(req,resp,next)=>{
  console.log(req);
  if(req.body.username=='sagar'){
    user={_id: req.body.ussrname};
    const token= jwt.createToken(user);
   
       resp.statusCode=200;
       resp.setHeader('Content-Type','application/JSON');
       resp.json({status:'authenticated',token:token});
  }else{
    resp.statusCode=400;
    resp.setHeader('Content-Type','text/plain');
    resp.end("Invalid user");
  }
  
    

})


module.exports = router;
