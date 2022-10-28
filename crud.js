const assert=require('assert');
const { debugPort } = require('process');



exports.insertOne=(db,document,collection,collback)=>{
    const call=db.collection(collection);
    call.insertOne(document,(err,res)=>{
        assert.equal(err,null);
        collback(res.acknowledged);
    });
};

exports.findDocument=(db,collection,collback)=>{
    const call=db.collection(collection);
    call.find({}).toArray((err,res)=>{
        assert.equal(err,null);
        collback(res);
    });
};

exports.updateDocument=(db,query,update,collection,collback)=>{
    const call=db.collection(collection);
    call.updateOne(query,{$set:update},null,(err,res)=>{
        assert.equal(err,null);
        collback(res.acknowledged);
    });
};

exports.removeDocument=(db,query,collection,collback)=>{
    const call=db.collection(collection);
    call.deleteOne(query,(err,res)=>{
        assert.equal(err,null);
        collback(res.acknowledged);
    })
}