var express = require('express');
var router = express.Router();

/* not found page. */
router.get('/notfound', function(req, res, next) {
  res.sendFile(__dirname + '/views/notfound.html')
});


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.json({msg: 'Hello, world!!'})
  res.sendFile(__dirname + '/views/index.html')
});

/*user registration*/
router.get('/user', function(req, res, next) {
  res.sendFile(__dirname + '/views/user.html');
});

/*users list*/
router.get('/users', function(req, res, next) {
  res.sendFile(__dirname + '/views/users.html');
});

/*user one*/
router.get('/user/:mno', function(req, res, next) {
  res.sendFile(__dirname + '/views/userone.html');
});

/*user login*/
router.get('/loginuser', function(req, res, next) {
  res.sendFile(__dirname + '/views/userlogin.html');
});

/*product registration*/
router.get('/product', function(req, res, next) {
  res.sendFile(__dirname + '/views/product.html');
});

/*products registration*/
router.get('/products', function(req, res, next) {
  res.sendFile(__dirname + '/views/products.html');
});

/*product one*/
router.get('/product/:pno', function(req, res, next) {
  res.sendFile(__dirname + '/views/productone.html');
});



module.exports = router;
