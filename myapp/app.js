var createError = require('http-errors');
var express = require('express');
var path = require('path');
 var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose=require('mongoose')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const adminRouter=require('./routes/admin');
const comment=require('./routes/comment');
var User = require('./models/user');
let bodyParser=require('body-parser');
let session=require('express-session');
let jwtAuth= require('./JWTauth');
let config= require('./config');

var app = express();




const url= config.mongoURL;
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


// app.use(cookieParser('1234-1223'));


app.use(express.static(path.join(__dirname, 'public')));




app.use('/users', usersRouter);


app.use('/',jwtAuth.verfyToken, indexRouter);

app.use('/admin',jwtAuth.verfyToken,adminRouter);
app.use('/comment',comment);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

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
