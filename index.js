const mongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const { createBrotliDecompress } = require('zlib');
const url='mongodb://127.0.0.1:27017'; //  coursera=Name of the Database


mongoClient.connect(url,(err,client)=>{ // db connection
    assert.equal(err,null);
    console.log(" Connection Established");
     db= client.db('School');
    db.createCollection('admin',(err,res)=>{
        assert.equal(err,null);
        console.log("Collection created "+res);
    });
     collection= db.collection('admin');
    collection.insertOne({name:"Sagar", position:"super admin"},(err,res)=>{
        assert.equal(err,null);
        console.log("Data Store is: \n");
        console.log(res)
    });
    collection.find({}).toArray((err,res)=>{
        assert.equal(err,null);
        console.log(res);
    })
    db.dropCollection('admin',(err,res)=>{
        assert.equal(err,null);
        console.log("collection deleted")
        client.close();

    })
})