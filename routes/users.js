var express = require('express');
var router = express.Router();
const Joi = require('joi');
const passport = require('passport');
const randomstring = require('randomstring');
const mailer = require('../misc/mailer');

const User = require('../models/user');
const Cart = require('../models/cart');
const Order = require('../models/order');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// Validation Schema
const userSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  lastname: Joi.string().required(),
  firstname: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  confirmationPassword: Joi.any().valid(Joi.ref('password')).required()
});

const userSchema1 = Joi.object().keys({
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  confirmationPassword: Joi.any().valid(Joi.ref('password')).required()
});

const userSchema2 = Joi.object().keys({
  lastname: Joi.string().required(),
  firstname: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().required()
});

const userSchema3 = Joi.object().keys({
  email: Joi.string().email().required()
});

// Authorization 
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error', 'Sorry, but you must be registered first!');
    res.redirect('/');
  }
};

const isNotAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.flash('error', 'Sorry, but you are already logged in!');
    res.redirect('/',{username: req.user.username});
  } else {
    return next();
  }
};

router.route('/register')
  .get(isNotAuthenticated, (req, res) => {
    res.render('../views/log in/register');
  })
  .post(async (req, res, next) => {
    try {
      const result = Joi.validate(req.body, userSchema);
      if (result.error) {
        req.flash('error', 'Data is not valid. Please try again.');
        res.redirect('/users/register');
        return;
      }

      // Checking if email is already taken
      const user = await User.findOne({ 'email': result.value.email });
      if (user) {
        req.flash('error', 'Email is already in use.');
        res.redirect('/users/register');
        return;
      }

      const user2 = await User.findOne({ 'username': result.value.username });
      if (user2) {
        req.flash('error', 'Username is already in use.');
        res.redirect('/users/register');
        return;
      }

      // Hash the password
      //const hash = await User.hashPassword(result.value.password);

      // Generate secret token
      const secretToken = randomstring.generate();
      console.log('secretToken', secretToken);

      // Save secret token to the DB
      result.value.secretToken = secretToken;

      // Flag account as inactive
      result.value.active = false;

      // Save user to DB
      delete result.value.confirmationPassword;
      //result.value.password = hash;

      const newUser = await new User(result.value); 
      console.log('newUser', newUser);
      await newUser.save();

      // Compose email
      const html = `Hi there,
      <br/>
      Thank you for registering!
      <br/><br/>
      Please verify your email by typing the following token:
      <br/>
      Token: <b>${secretToken}</b>
      <br/>
      On the following page:
      <a href="http://localhost:3000/users/verify">http://localhost:3000/users/verify</a>
      <br/><br/>
      Have a pleasant day.` 

      // Send email
      await mailer.sendEmail('duykhangkhang97@gmail.com', result.value.email, 'Please verify your email!', html);

      req.flash('success', 'Please check your email.');
      res.redirect('/users/verify');
    } catch(error) {
      next(error);
    }
  });

router.route('/login')
  .get(isNotAuthenticated, (req, res) => {
    res.render('../views/log in/login');
  })
  .post(passport.authenticate('local', {
    failureRedirect: '/users/login',
    failureFlash: true
  }),function(req,res,next){
    if(req.session.oldUrl){
      var oldUrl= req.session.oldUrl;
   
      res.redirect(req.session.oldUrl);
      req.session.oldUrl=null;
    }else{
      res.redirect('/users/dashboard');
    }
  });

router.route('/dashboard')
  .get(isAuthenticated, (req, res) => {
    Order.find({'user': req.user.username},function(err,orders){
      if(err){
        return res.write('Error!');
      }
      var cart;
      orders.forEach(function(order){
        cart=new Cart(order.cart);
        order.items=cart.generateArray();
      });
      res.render('../views/log in/dashboard', {
      username: req.user.username,
      lastname: req.user.lastname,
      firstname: req.user.firstname,
      address: req.user.address,
      phone: req.user.phone,
      orders:orders
    });
    });
    
  });

router.route('/verify')
  .get(isNotAuthenticated, (req, res) => {
    res.render('../views/log in/verify');
  })
  .post(async (req, res, next) => {
    try {
      const { secretToken } = req.body;

      // Find account with matching secret token
      const user = await User.findOne({ 'secretToken': secretToken });
      if (!user) {
        req.flash('error', 'No user found.');
        res.redirect('/users/verify');
        return;
      }

      user.active = true;
      user.secretToken = '';
      await user.save();

      req.flash('success', 'Thank you! Now you may login.');
      res.redirect('/users/login');
    } catch(error) {
      next(error);
    }
  })

router.route('/logout')
  .get(isAuthenticated, (req, res) => {
    req.logout();
    req.flash('success', 'Successfully logged out. Hope to see you soon!');
    res.redirect('/');
  });

router.route('/change')
  .get(isAuthenticated, (req, res) => {
    res.render('../views/log in/change',{username: req.user.username});
  })
  .post(async (req, res, next) => {
    try {
      // const result = Joi.validate(req.body, userSchema);
      // if (result.error) {
      //   req.flash('error', 'Data is not valid. Please try again.');
      //   res.redirect('/users/register');
      //   return;
      // }

      // Checking if email is already taken
      // const result = Joi.validate(req.body, userSchema1);
      // if (result.error) {
      //   req.flash('error', 'Data is not valid. Please try again.');
      //   res.redirect('/users/change');
      //   return;
      // }
      const user1 = await User.findOne({ 'username': req.user.username });
      if (req.body.oldpassword!=user1.password) {
        req.flash('error', 'Old password is not correct.');
        res.redirect('/users/change');
        return;
      }
      if (req.body.password!=req.body.confirmationPassword) {
        req.flash('error', 'Pass is not correct.');
        res.redirect('/users/change');
        return;
      }
      console.log(user1);
      

      // Generate secret token
      const secretToken = randomstring.generate();
      console.log('secretToken', secretToken);

      // Save secret token to the DB
      user1.secretToken = secretToken;

      // Flag account as inactive
      user1.active = false;

      // Save user to DB
      
      //result.value.password = hash;

      // const newUser = await new User(result.value); 
      // console.log('newUser', newUser);
      user1.password=req.body.password;
      await user1.save();

      // Compose email
      const html = `Hi there,
      <br/>
      Please verify to change password by typing the following token:
      <br/>
      Token: <b>${secretToken}</b>
      <br/>
      On the following page:
      <a href="http://localhost:3000/users/verify">http://localhost:3000/users/verify</a>
      <br/><br/>
      Have a pleasant day.` 

      // Send email
      await mailer.sendEmail('duykhangkhang97@gmail.com', user1.email, 'Please verify your email!', html);
      req.logout();
      req.flash('success', 'Please check your email.');
      res.redirect('/users/verify');
    } catch(error) {
      next(error);
    }
  });
router.route('/changeinfo')
  .get(isAuthenticated, (req, res) => {
    res.render('../views/log in/changeinfo',{lastname: req.user.lastname,
      firstname: req.user.firstname,
      address: req.user.address,
      phone: req.user.phone});
  })
  .post(async (req, res, next) => {
    try {
      const result = Joi.validate(req.body, userSchema2);
      if (result.error) {
        req.flash('error', 'Data is not valid. Please try again.');
        res.redirect('/users/changeinfo');
        return;
      }
      
      const user = await User.findOne({ 'username': req.user.username });
      user.lastname = req.body.lastname;
      user.firstname = req.body.firstname;
      user.phone = req.body.phone;
      user.address = req.body.address;

      user.save();
      
      req.flash('success', 'Success to change information');
      res.redirect('/users/dashboard');
    } catch(error) {
      next(error);
    }
  });

router.route('/reset')
  .get(isNotAuthenticated, (req, res) => {
    res.render('../views/log in/reset');
  })
  .post(async (req, res, next) => {
    try {
      const result = Joi.validate(req.body, userSchema3);
        if (result.error) {
        req.flash('error', 'Data is not valid. Please try again.');
        res.redirect('/users/register');
        return;
      }

      const user1 = await User.findOne({ 'email': req.body.email });
      console.log(user1);

      const html = `Hi there,
      <br/>
      Please verify to change password by typing the following token:
      <br/>
      Your pass: <b>${user1.password}</b>
      <br/>
      On the following page:
      <a href="http://localhost:3000/users/verify">http://localhost:3000/users/verify</a>
      <br/><br/>
      Have a pleasant day.` 

      // Send email
      await mailer.sendEmail('duykhangkhang97@gmail.com', user1.email, 'Your password!', html);
      req.logout();
      req.flash('success', 'Please check your email.');
      res.redirect('/users/login');
    } catch(error) {
      next(error);
    }
  });
module.exports = router;
