var express=require('express');
// const admin= require('./../models/coursera');
const parser= require('body-parser');
const mongoose= require('mongoose');
const assert= require('assert');
const router= express.Router();

router.route('/')
.get((req,res)=>{
    console.log("hii");  
    
})
module.exports= router;