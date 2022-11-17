var createError = require('http-errors');
var express = require('express');
var path = require('path');
 var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose=require('mongoose')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const adminRouter=require('./routes/admin');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');
let bodyParser=require('body-parser');

let session=require('express-session');
let fileStore=require('session-file-store')(session);


var app = express();
app.use(session({
  name: 'session-id',
  secret: '12345-67890-09876-54321',
  saveUninitialized: true,
  resave: false,
  store: new fileStore()
}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


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


// app.use(cookieParser('1234-1223'));


app.use(express.static(path.join(__dirname, 'public')));



let auth=(req,resp,next)=>{
  if(!req.user){
      // auth(req,resp,next);
      console.log("hiiii ",req);
      let err= new Error('Not Authenticate User-errror');
      err.status=403;
      next(err);
  }else{
    next();
  }
}

app.use('/users', usersRouter);
app.use(auth);

app.use('/', indexRouter);

app.use('/admin',adminRouter);
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
