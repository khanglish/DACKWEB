var express = require('express');
var bodyParser=require('body-parser');
var Passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var router = express.Router();

var indexController = require('../controllers/index_controllers');
var detailsControllers = require('../controllers/details_controllers');
var caterogyControllers = require('../controllers/caterogy_controllers');

/* GET home page. */
router.get('/', indexController.display_product);

router.get('/:type/details/:model', detailsControllers.display_details);

router.get('/:type/phanloai/:label', caterogyControllers.caterogy);

router.use(bodyParser.urlencoded({extended: true}));
router.use(Passport.initialize());
router.use(Passport.session());

router.route('/login')
.get((req,res)=>res.render('../views/log in/login'));
.post(Passport.authenticate('local',{failureRedirect: '/login'}))

Passport.use(new LocalStrategy(
	(username,password,done)=>{
		
	}
))

module.exports = router;
