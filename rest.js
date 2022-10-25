const http=require('http');
const fs= require('fs');
const path=require('path');
const express=require('express');
const logger=require('morgan');
const bodyParser=require('body-parser');
const { nextTick } = require('process');
const host='localhost'
const port='8080'

const app=express();
app.use(logger('common'));
app.use(express.static('public'));
app.use(bodyParser.json());

app.all((req,res)=>{
    resp.setHeader('content-type','text/html');
    next();
})

app.get('/sagar/:id',(req,resp,next)=>{
    resp.status=200;
    resp.end('Will get response for id'+req.params.id);
});
app.post('/sagar/:id',(req,resp,next)=>{
    resp.status=200;
    resp.end('Will save data  for id'+req.params.id+' name '+req.body.name);
});
app.put('/sagar/:id',(req,resp,next)=>{
    resp.status=200;
    resp.end('Will update data for id'+req.params.id+" to  name: "+req.body.name);
});
app.delete('/sagar/:id',(req,resp,next)=>{
    resp.status=200;
    resp.end('Will delete for id'+req.params.id);
});


app.use((req,resp)=>{
    // console.log(req);
  
 
    resp.end('<html><body><small>You are in home Page</small></body></html>')
})
app.listen(port,host,()=>{
    console.log(`server started  on url http://${host}:${port} `)
})
