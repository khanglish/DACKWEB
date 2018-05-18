var Laptop = require('../models/laptops');
var Pc = require('../models/pcs');
var Monitor = require('../models/monitors');

exports.display_product = function(req, res, next) {
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
};

