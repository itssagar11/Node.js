const http=require('http');
const fs= require('fs');
const path=require('path');
const { hostname } = require('os');
const host='localhost'
const port='8080'

const server= http.createServer((req,resp)=>{
    console.log(req.url);
   if(req.method=='GET'){
    let fileUrl;
    if(req.url=='/'){
        resp.statusCode=200;
        resp.setHeader('CONTENT_TYPE','text/html');
        resp.end('<html><body><h1>Namaste, World!</h1></body></html>');
    
    }else{
        fileUrl=req.url;
        let filePath=path.resolve('./public'+fileUrl);
        const fileExt= path.extname(filePath);
        if(fileExt=='.html'){
            fs.exists(filePath,(exist)=>{
                console.log(filePath)
                if(!exist){
                    resp.statusCode=404;
                    resp.setHeader('CONTENT_TYPE','text/html');
                    resp.end('<html><body><small>file Not found!</small></body></html>');
                
                }else{
                    resp.statusCode=200;
                    resp.setHeader('CONTENT_TYPE','text/html');
                    fs.createReadStream(filePath).pipe(resp);
                
                }
            });
        }else{
            resp.statusCode=404;
            resp.setHeader('CONTENT_TYPE','text/html');
            resp.end('<html><body><small>File Not Supported!</small></body></html>');
        
        }
    }
   }else{
    resp.statusCode=404;
    resp.setHeader('CONTENT_TYPE','text/html');
    resp.end('<html><body><small>Request Method Not Supported!</small></body></html>');

   }
})
server.listen(port,hostname,()=>{
    console.log("Server Started on Port 8080")
})