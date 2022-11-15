const mongoose=require('mongoose');
const schema= mongoose.Schema;


let user= new schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        default:true
    }
})
module.exports= mongoose.model('User',user);