const http=require('http');
const { hostname } = require('os');
const host='localhost'
const port='8080'

const server= http.createServer((req,resp)=>{
    console.log(req);
    resp.statusCode=200;
    resp.setHeader('CONTENT_TYPE','text/html');
    resp.end('<html><body><h1>Namaste, World!</h1></body></html>');

})
server.listen(port,hostname,()=>{
    console.log("Server Started on Port 8080")
})