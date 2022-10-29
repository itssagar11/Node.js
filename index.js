const mongoose=require('mongoose');
const admin= require('./models/coursera');

const assert=require('assert');

const url='mongodb://127.0.0.1:27017/coursera'; 

mongoose.connect(url).then(()=>{
  console.log("Connection Established");

//   let   newAdmin= admin({
//     name:"Ram",
//     email:"ram21@gmail.com",
//     role:1
//   });

//   return newAdmin.save();
 })

//  instead we can also use 
admin.create({
  name:"Ram",
  email:"aa@gmail.com",
   role:1
})
.then((dish)=>{
  console.log(dish);
  return admin.findById(dish._id);
}).then((docs)=>{
  console.log(docs+"hii");
    docs.address.push({
    streetNo:23,
    city:"doon",
    state:"uk hai bhaisaab"
   });
   return docs.save();
}).then((res)=>{
  console.log(res)
  admin.find({});
}).then((docs)=>{
  console.log(docs);
})
.catch((err)=>{
  console.log("error  "+err);
})
.finally(()=>{
  return mongoose.connection.close();
});

