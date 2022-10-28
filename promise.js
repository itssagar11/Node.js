const mongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const { createBrotliDecompress } = require('zlib');
const crud=require('./crud');
const url='mongodb://127.0.0.1:27017'; 


mongoClient.connect(url).then((client)=>{ // db connection
   
    console.log(" Connection Established");
     db= client.db('coursera');
     crud.insertOne(db,{name:"ram",title:"SDE"},'Employees').then(()=>{
     crud.findDocument(db,'Employees').then((res)=>{
        console.log(res);
     });
      
     })
     .catch((err)=>{
        console.log(err);
     })
    
})
.catch((err)=>{
   console.log(err);
})