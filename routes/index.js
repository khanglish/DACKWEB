var express = require('express');
var bodyParser=require('body-parser');
var Passport=require('passport');
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

// router.route('/login')
// .get((req,res)=>res.render('../views/log in/login'));
// .post(Passport.authenticate('local',{failureRedirect: '/login'}))


module.exports = router;
