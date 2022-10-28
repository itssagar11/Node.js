const mongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const { createBrotliDecompress } = require('zlib');
const crud=require('./crud');
const url='mongodb://127.0.0.1:27017'; 


mongoClient.connect(url,(err,client)=>{ // db connection
    assert.equal(err,null);
    console.log(" Connection Established");
     db= client.db('coursera');
     crud.insertOne(db,{name:"ram",title:"SDE"},'Employees',(result)=>{
        console.log(result+" Insert");
     })
     crud.updateDocument(db,{name:"ram"},{name:"kam"},'Employees',(res)=>{
        console.log(res+"Update");
     })
     crud.findDocument(db,'Employees',(res)=>{
        console.log(res);
     });

    //  crud.removeDocument(db,{name:"ram"},'Employees',(res)=>{
    //     console.log(res);
    //  })
    // db.createCollection('admin',(err,res)=>{
    //     assert.equal(err,null);
    //     console.log("Collection created "+res);
    // });
    
})