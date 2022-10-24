let rec=require('./rectangle.js');
let square=require('./square.js');
let circle= require('./collback&error.js');
console.log("Area of Rectangle is : "+ rec.area(3,2));
console.log("Parameter of Rectangle is : "+ rec.paramenter(3,2));
console.log("Area of Square is : "+ square.area(3));
console.log("Parameter of Rectangle is : "+ square.paramenter(3));



circle(5,(err,obj)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("Area of circle is "+obj.area())
        console.log("Parameter of circle is "+obj.parameter())
    }
})