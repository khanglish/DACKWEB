let mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schema= new Schema({
		"imagepath": {type: String},
    "model": {
		type: String,
		required: true,
		unique: true,
	},
    "size": {type: String},
    "resolution": {type: String},
    "refrate": {type: String},
    "resrime": {type: String},
    "connection": {type: String},
    "weight": {type: String},
    "price": {
		type: Number,
		min: 0,
	},
    "tech": {
		type: String,
	},
	label: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('monitors', schema );
