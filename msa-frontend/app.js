let createError = require('http-errors');
let express = require('express');
let path = require('path');
let request = require('request')
let port = 3000;

let indexRouter = require('./public/index');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//서버시작
app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
});

module.exports = app;

