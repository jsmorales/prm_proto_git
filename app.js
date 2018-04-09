var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var timelineRouter = require('./routes/timeline');
var bodyParser = require('body-parser')


var app = express();

app.use(session({
	secret:'appPrmVersionAlpha2018', 
	resave: false, 
	saveUninitialized: false
}))

app.use(bodyParser.urlencoded({extended:true}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(express.static(path.join(__dirname+'/sd-admin-2', 'node_modules/sb-admin-2/vendor')));

//app.use('/util',express.static(path.join(__dirname, 'util')));
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));
app.use('/sd-admin-2',express.static(path.join(__dirname, 'node_modules/sb-admin-2/vendor')));
app.use('/sd-admin-2/dist',express.static(path.join(__dirname, 'node_modules/sb-admin-2/dist')));
app.use('/sd-admin-2/data',express.static(path.join(__dirname, 'node_modules/sb-admin-2/data')));

app.use('/client',express.static(path.join(__dirname, 'client')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/timeline', timelineRouter);

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
