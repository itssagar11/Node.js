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
  User.find({}).then((doc)=>{
    res.statusCode=200;
    res.setHeader('COontent-Type','application/json');
    res.json(doc);
    res.end();
})
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
        if(req.user.firstname)
          user.firstName=req.body.firstname;
          if(req.user.lastname)
        user.lastName=req.body.lastname;
        user.save((err,user)=>{
          if(err){
            res.statusCode=500;
            res.setHeader('Content-Type','application/json');
            res.json({err:err});
          }
        })
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
       
      }
    })});

router.post('/login',(req,resp,next)=>{
  console.log(req);
  User.findOne({username:req.body.username}).then((res)=>{
      console.log(res);
    if(res!=null){
    user={_id: res._id};
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
  .catch((err)=>{
      next(err);
  })
  
  
  
  

})



module.exports = router;
