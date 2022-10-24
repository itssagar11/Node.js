
// collback function and error handling 
// Error object  is for errors
// SetTimeout is just for simulate the wating time that function may take while communicate with database etc.


module.exports=(r,collback)=>{
        if(r<=0){
            setTimeout(()=>collback(new Error("Radius cannot be ) or Negative. "),null),2000);
        }else{
            setTimeout(()=>collback(null,{
                parameter:()=>
                    (1/2*r*r)
                ,
                area:()=>
                   ( 3.14*r*r)
                

            }),2000)
        }



}