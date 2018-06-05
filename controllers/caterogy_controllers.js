var Laptop = require('../models/laptops');
var Pc = require('../models/pcs');
var Monitor = require('../models/monitors');

exports.caterogy = function(req, res) {
    if (req.params.type == "laptops") {
        Laptop.find({'label': req.params.label}, function(err, doc) {
            if (err) {
                console.log(err);
                return;
            }
            letRender(doc);
        });
    }
    if (req.params.type == "pcs") {
        Pc.find({'label': req.params.label}, function(err, doc) {
            if (err) {
                console.log(err);
                return;
            }
            letRender(doc);
        });
    }
    if (req.params.type == "monitors") {
        Monitor.find({'label': req.params.label}, function(err, doc) {
            if (err) {
                console.log(err);
                return;
            }
            letRender(doc);
        });
    }
    function letRender(doc) {
        res.render('caterogy/Caterogy', {
            title: req.params.type+" "+req.params.label,
            doc: doc,
            label: req.params.label,
            type: req.params.type,
        });
    }
};
