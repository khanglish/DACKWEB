var Laptop = require('../models/laptops');
var Pc = require('../models/pcs');
var Monitor = require('../models/monitors');

exports.caterogy = function(req, res) {
    if (req.params.type == "laptops") {
        Laptop.find({'label': req.params.label}, function(err, lap1) {
            if (err) {
                console.log(err);
                return;
            }
            res.render('caterogy/laptopCaterogy', {title: req.params.label, lap1: lap1});
        });
    }
    if (req.params.type == "pcs") {
        Pc.find({'label': req.params.label}, function(err, pc1) {
            if (err) {
                console.log(err);
                return;
            }
            res.render('caterogy/pcCaterogy', {title: req.params.label, pc1: pc1});
        });
    }
    if (req.params.type == "monitors") {
        Monitor.find({'label': req.params.label}, function(err, mon1) {
            if (err) {
                console.log(err);
                return;
            }
            res.render('caterogy/monitorCaterogy', {title: req.params.label, mon1: mon1});
        });
    }
};
