var express = require('express');
var User= require('../models/comments');
var bodyParser=require('body-parser');
// let jwtAuth= require('../JWTauth');
const router= express.Router();

router.post('/',(req,resp,next)=>{
    req.body.author= req.user._id;
    // console.log(req);
    User.create(req.body).then((res)=>{
        resp.setHeader('Content-Type','application/json');
        resp.end(req.body);
        console.log('comment added');
    })
    .catch((err)=>{
        next(err);
    });

    console.log(req.user);
  
})
router.get('/',(req,res,next)=>{
    User.find({}).populate('author').then((doc)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(doc);
        res.end();
    })
})
module.exports= router;