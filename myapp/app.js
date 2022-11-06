var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose=require('mongoose')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const adminRouter=require('./routes/admin');
var app = express();
const url= 'mongodb://localhost:27017/coursera';
const connect= mongoose.connect(url).then((db)=>{
  console.log("Connection Established");
}).catch((er)=>{
  console.log(er);
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
let auth= (req,resp,next)=>{
     
      let authHeader = req.headers.authorization;
      console.log(authHeader);
      if(!authHeader){

        let err= new Error('Authentication Required!');
        err.status=401;
        resp.setHeader('WWW-Authenticate','Basic');
        next(err);
        return;
      }else{

        let auth = new Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':');
        let username= auth[0];
        let password= auth[1];
        console.log(username, " ",password);
        if(username=='sagar' && password=='password'){
          next();
        }else{

          let err= new Error('Authentication Invalid!');
          err.status=401;
          resp.setHeader('WWW-Authenticate','Basic');
          next(err);
          return;
        }
      }


}
app.use(auth);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',adminRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
