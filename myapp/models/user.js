const mongoose=require('mongoose');
const passportlocal=require('passport-local-mongoose');
const schema= mongoose.Schema;


let user= new schema({
  
    admin:{
        type:Boolean,
        default:true
    }
});
user.plugin(passportlocal);
module.exports= mongoose.model('User',user);