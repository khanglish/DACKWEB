var express = require('express');
var router = express.Router();
var Laptop = require('../models/laptops');
var Pc = require('../models/pcs');
var Monitor = require('../models/monitors');
/* GET home page. */
router.get('/', function(req, res, next) {
  Laptop.find().exec(function(err, laptops) {
    Pc.find().exec(function(err, pcs) {
      Monitor.find().exec(function(err, monitors) {
      var laptopChunks = [];
      var pcChunks = [];
      var monitorChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < laptops.length; i += chunkSize) {
        laptopChunks.push(laptops.slice(i, i + chunkSize));
      }
      for (var i = 0; i < pcs.length; i += chunkSize) {
        pcChunks.push(pcs.slice(i, i + chunkSize));
      }
      for (var i = 0; i < monitors.length; i += chunkSize) {
        monitorChunks.push(monitors.slice(i, i + chunkSize));
      }
        res.render('shop/index', {
          title: 'Treek',
          laptops: laptopChunks,
          pcs: pcChunks,
          monitors: monitorChunks,
        });
      });
    });
  });
});

router.get('/laptops/:model', function(req, res) {
  Laptop.findOne({'model': req.params.model}, function(err, lap) {
    if (err) return;
    res.render('shop/lap', {title: req.params.model, lap: lap});
  });
});
router.get('/pcs/:model', function(req, res) {
  Pc.findOne({'model': req.params.model}, function(err, pc) {
    if (err) return;
    res.render('shop/pcs', {title: req.params.model, pc: pc});
  });
});
router.get('/monitors/:model', function(req, res) {
  Monitor.findOne({'model': req.params.model}, function(err, monitor) {
    if (err) return;
    res.render('shop/monitor', {title: req.params.model, monitor: monitor});
  });
});

router.get('/laptops/phanloai/asus', function(req, res) {
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
});
module.exports = router;
