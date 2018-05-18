var Laptop = require('../models/laptops');
var Pc = require('../models/pcs');
var Monitor = require('../models/monitors');

exports.display_details = function(req, res) {
    if (req.params.type == "laptops") {
        Laptop.findOne({'model': req.params.model}, function(err, lap) {
            if (err) return;
            res.render('details/lap_details', {title: req.params.model, lap: lap});
        });
    }
    if (req.params.type == "pcs") {
        Pc.findOne({'model': req.params.model}, function(err, pc) {
            if (err) return;
            res.render('details/pcs_details', {title: req.params.model, pc: pc});
        });
    }
    if (req.params.type == "monitors") {
        Monitor.findOne({'model': req.params.model}, function(err, monitor) {
            if (err) return;
            res.render('details/monitor_details', {title: req.params.model, monitor: monitor});
        });
    }
};
