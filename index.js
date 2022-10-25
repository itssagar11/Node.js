const http=require('http');
const fs= require('fs');
const path=require('path');
const express=require('express');
const logger=require('morgan');
const host='localhost'
const port='8080'


const router= require('./router');
const app=express();
app.use(logger('common'));
app.use(express.static('public'));


app.use('/routers/:id',router);
app.listen(port,host,()=>{
    console.log(`server started  on url http://${host}:${port} `)
})
