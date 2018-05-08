let mongoose = require('mongoose');

var Schema = mongoose.Schema;
var schema = new Schema({
    "imagepath": {type: String},
    "model": {
        type: String,
		required: true,
		unique: true,
    },
    "cpu": {type: String},
    "ram": {type: String},
    "storage": {type: String},
    "cdndvd": {type: String},
    "vga": {type: String},
    "monitor": {type: String},
    "connection": {type: String},
    "tech": {type: String},
    "weight": {type: String},
    "battery": {type: String},
    "os": {type: String},
    "price": {
		type: Number,
		min: 0,
	},
});

module.exports = mongoose.model('pcs', schema );
