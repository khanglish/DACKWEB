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

/* router.get('/laptops/phanloai/asus', function(req, res) {
  Laptop.find({'label': 'Asus'}, function(err, lap1) {
    if (err) return;
    res.render('shop/laptopasus', {title: 'Laptop Asus', lap1: lap1});
  });
});

router.get('/laptops/phanloai/dell', function(req, res) {
  Laptop.find({'label': 'Dell'}, function(err, lap2) {
    if (err) return;
    res.render('shop/laptopdell', {title: 'Laptop Dell', lap2: lap2});
  });
});

router.get('/laptops/phanloai/msi', function(req, res) {
  Laptop.find({'label': 'MSI'}, function(err, lap3) {
    if (err) return;
    res.render('shop/laptopmsi', {title: 'MSI', lap3: lap3});
  });
});

router.get('/monitors/phanloai/asus', function(req, res) {
  Monitor.find({'label': 'Asus'}, function(err, mon1) {
    if (err) return;
    res.render('shop/monitorasus', {title: 'Monitors Asus', mon1: mon1});
  });
});

router.get('/monitors/phanloai/dell', function(req, res) {
  Monitor.find({'label': 'Dell'}, function(err, mon1) {
    if (err) return;
    res.render('shop/monitordell', {title: 'Monitors Dell', mon1: mon1});
  });
});

router.get('/monitors/phanloai/msi', function(req, res) {
  Monitor.find({'label': 'MSI'}, function(err, mon1) {
    if (err) return;
    res.render('shop/monitormsi', {title: 'Monitors MSI', mon1: mon1});
  });
});

router.get('/pcs/phanloai/dell', function(req, res) {
  Pc.find({'label': 'Dell'}, function(err, pc1) {
    if (err) return;
    res.render('shop/pcdell', {title: 'Pcs Dell', pc1: pc1});
  });
});

router.get('/pcs/phanloai/msi', function(req, res) {
  Pc.find({'label': 'MSI'}, function(err, pc1) {
    if (err) return;
    res.render('shop/pcmsi', {title: 'Pcs MSI', pc1: pc1});
  });
}); */
module.exports = router;
