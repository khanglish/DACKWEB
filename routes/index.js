var express = require('express');
var router = express.Router();
/* var Laptop = require('../models/laptops');
var Pc = require('../models/pcs');
var Monitor = require('../models/monitors'); */

var indexController = require('../controllers/index_controllers');
var detailsControllers = require('../controllers/details_controllers');

var caterogyControllers = require('../controllers/caterogy');

/* GET home page. */
router.get('/', indexController.display_product);

router.get('/:type/details/:model', detailsControllers.display_details);

router.get('/:type/phanloai/:label', caterogyControllers.caterogy);

module.exports = router;
