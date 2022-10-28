const assert=require('assert');
const { debugPort } = require('process');



exports.insertOne=(db,document,collection)=>{
    const call=db.collection(collection);
    return call.insertOne(document)
       
};

exports.findDocument=(db,collection,collback)=>{
    const call=db.collection(collection);
    return call.find({}).toArray();
};

exports.updateDocument=(db,query,update,collection,collback)=>{
    const call=db.collection(collection);
   return  call.updateOne(query,{$set:update},null);
};

exports.removeDocument=(db,query,collection,collback)=>{
    const call=db.collection(collection);
   return  call.deleteOne(query)
}