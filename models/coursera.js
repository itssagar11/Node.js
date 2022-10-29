const mongoose=require('mongoose');
const schema= mongoose.Schema;

const addressSchema=new mongoose.Schema({
    streetNo:{
        type: Number,
        min:1,
        max:100,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})
const admin= new schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:Number,
        required:true
    },
    address:[addressSchema],
    
},{
    timestamps:true
});
let Model= mongoose.model('admin',admin)
module.exports=Model;