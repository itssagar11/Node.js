const mongoose=require('mongoose');
const schema= mongoose.Schema;

let comment= new schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},
{
    timestamps:true
}

);
module.exports=mongoose.model('comment',comment);