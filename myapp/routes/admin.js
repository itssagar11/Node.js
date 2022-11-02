var express=require('express');
const admin= require('./../models/coursera');
const parser= require('body-parser');
const mongoose= require('mongoose');
const assert= require('assert');
const router= express.Router();

router.route('/')
.get((req,res)=>{
    console.log("Waiting")
    admin.find({}).then((doc)=>{
        res.statusCode=200;
        res.setHeader('COontent-Type','application/json');
        res.json(doc);
        res.end();

    })
    .catch((err)=> next(err) );
})
.post((req,res)=>{
    console.log(req.body);
    admin.create(req.body).then((res)=>{
        console.log("Response added to db");

    }).catch((err)=>{
        next(err);
    });


})
module.exports= router;