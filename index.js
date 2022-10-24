const http=require('http');
const fs= require('fs');
const path=require('path');
const express=require('express');
const logger=require('morgan');
const host='localhost'
const port='8080'



const app=express();
app.use(logger('common'));
app.use(express.static('public'));
app.use((req,resp)=>{
    // console.log(req);
    resp.status=200;
    resp.setHeader('content-type','text/html');
    resp.end('<html><body><small>file not found</small></body></html>')
})
app.listen(port,host,()=>{
    console.log(`server started  on url http://${host}:${port} `)
})
