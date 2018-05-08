let mongoose = require('mongoose');
let validator = require('validator');
let assert = require('assert');

var Schema = mongoose.Schema;
var schema= new Schema({
    "_id": {
        type: String, 
		required: true, 
		unique: true
    },
    "model":{
		type: String,
		required:true,
		unique: true
	},
    "size":  {type: String},
    "resolution":  {type: String},
    "refrate":  {type: String},
    "resrime":  {type: String},
    "connection":  {type: String},
    "weight":  {type: String},
    "price": {
		type: Number,
		min: 0,
	},
    "tech":  {
		type: Number,
		min: 0,
	},
});

module.exports = mongoose.model('monitors',schema );