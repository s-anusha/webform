var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require("mysql");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var methodOverride = require('method-override')

var homeRouter = require('./routes/home');
var insertRouter = require('./routes/insert');
var searchRouter = require('./routes/search');
var deleteRouter = require('./routes/delete');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     	: 'localhost',
		user     	: 'root',
		password 	: 'root',
		database 	: 'db_intern'
	});
	res.locals.connection.connect();
	next();
});

app.use('/', homeRouter);
app.use('/insert', insertRouter);
app.use('/search', searchRouter);
app.use('/delete', deleteRouter);

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
