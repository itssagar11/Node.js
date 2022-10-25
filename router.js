
const express=require('express');
const bodyParser=require('body-parser');


const router=express.Router();
router.use(bodyParser.json());
router.route('/')

.get((req,resp,next)=>{
    resp.status=200;
    resp.end('Will get response for id'+req.params.id);
    console.log(req.params);
})
.post((req,resp,next)=>{
    resp.status=200;
    resp.end('Will save data  for id'+req.params.id+' name '+req.body.name);
})
.put((req,resp,next)=>{
    resp.status=200;
    resp.end('Will update data for id'+req.params.id+" to  name: "+req.body.name);
})
.delete((req,resp,next)=>{
    resp.status=200;
    resp.end('Will delete for id'+req.params.id);
});
module.exports=router;