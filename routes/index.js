var express = require('express');
var bodyParser=require('body-parser');
var Passport=require('passport');
var Laptop = require('../models/laptops');
var Pc = require('../models/pcs');
var Monitor = require('../models/monitors');
var Cart = require('../models/cart');
var Order=require('../models/order');
var LocalStrategy=require('passport-local').Strategy;
var router = express.Router();

var indexController = require('../controllers/index_controllers');
var detailsControllers = require('../controllers/details_controllers');
var caterogyControllers = require('../controllers/caterogy_controllers');
var searchControllers = require('../controllers/search_controllers');
/* GET home page. */
router.get('/', indexController.display_product);

router.get('/:type/details/:model', detailsControllers.display_details);

router.get('/:type/phanloai/:label', caterogyControllers.caterogy);

router.get('/search', searchControllers.search);

router.get('/add-to-cart/:id', function(req,res,next){
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});

	Laptop.findById(productId, function(err, product){
		if(err){
			return res.redirect('/');
		}
		cart.add(product,product.id)
		req.session.cart=cart;
		console.log(req.session);
		res.redirect('/');
	});
});

router.get('/add-to-cartt/:id', function(req,res,next){
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});

	Pc.findById(productId, function(err, product){
		if(err){
			return res.redirect('/');
		}
		cart.add(product,product.id)
		req.session.cart=cart;
		console.log(req.session);
		res.redirect('/');
	});
});

router.get('/add-to-carttt/:id', function(req,res,next){
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});

	Monitor.findById(productId, function(err, product){
		if(err){
			return res.redirect('/');
		}
		cart.add(product,product.id)
		req.session.cart=cart;
		console.log(req.session);
		res.redirect('/');
	});
});
// router.route('/login')
// .get((req,res)=>res.render('../views/log in/login'));
// .post(Passport.authenticate('local',{failureRedirect: '/login'}))
router.get('/shopping-cart', function(req,res,next){
	if(!req.session.cart){
		return res.render('shop/shopping-cart',{product:null});

	}
	var cart=new Cart(req.session.cart);
	res.render('shop/shopping-cart',{products: cart.generateArray(), totalPrice: cart.totalPrice});
})
router.get('/checkout',isLoggedIn,function(req,res,next){
	if(!req.session.cart){
		return res.redirect('/shopping-cart');
	}
	var cart=new Cart(req.session.cart);
	var errMsg=req.flash('error')[0];
	res.render('shop/checkout',{total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});
router.post('/checkout',isLoggedIn,function(req,res,next){
		var cart= new Cart(req.session.cart);
		var order= new Order({
			user: req.user.username,
			cart: cart,
			address: req.body.address,
			name: req.body.name
		})
		console.log(order);
		order.save(function(err,result){
			req.flash('success','Successfully bought product');
			req.session.cart=null;
			res.redirect('/');
		});
})
module.exports = router;

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.session.oldUrl=req.url;
	res.redirect('/users/login');
}
function notLoggedIn(req, res, next){
	if(!req.isnAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}
// router.route('/login')
// .get((req,res)=>res.render('../views/log in/login'));
// .post(Passport.authenticate('local',{failureRedirect: '/login'}))


module.exports = router;
