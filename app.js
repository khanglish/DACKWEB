var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
var expressHsb = require('express-handlebars');
var mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
var indexRouter = require('./routes/index');
const passport = require('passport');
var MongoStore=require('connect-mongo')(session);

// var usersRouter = require('./routes/users');
require('./config/passport');
var app = express();

mongoose.connect('mongodb://admin:admin@ds111370.mlab.com:11370/ktreeteam');
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHsb({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
  cookie: { maxAge: 180*60*1000 },
  secret: 'codeworkrsecret',
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success');
  res.locals.error_messages = req.flash('error');
  res.locals.isAuthenticated = req.user ? true : false;
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', require('./routes/users'));
// catch 404 and forward to error handler





app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.session=req.session;
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
