var Laptop = require('../models/laptops');
var Pc = require('../models/pcs');
var Monitor = require('../models/monitors');
var async = require('async');

exports.search = function(req, res) {
    let model = req.query.model;
    console.log(model);
    if(model === undefined){
        res.render('search/result',{
            title: "Result",
            information: "The search string is empty, please type in search box.",
        });
        return;
    }
    let listLaptop = Laptop.find({ model: { "$regex": model, $options: 'ix' }});
    let listPc = Pc.find({ model: { "$regex": model, $options: 'ix' }});
    let listMonitor = Monitor.find({ model: { "$regex": model, $options: 'ix' }});

    var resourcesStack = {
        laptopList: listLaptop.exec.bind(listLaptop),
        pcList: listPc.exec.bind(listPc),
        monitorList: listMonitor.exec.bind(listMonitor),
    }
    async.parallel(resourcesStack, function(error, resultSet){
        if(error){
            res.status(500).send(error);
            return;
        }
        console.log(resultSet);       
        res.render('search/result',{
            title: "Result",
            laptops:resultSet.laptopList,
            pcs:resultSet.pcList,
            monitors:resultSet.monitorList
        });
    });
};