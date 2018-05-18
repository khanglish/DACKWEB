let mongoose = require('mongoose');

// Define a schema
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
	"keyboard": {type: String},
	"tech": {type: String},
	"weight": {type: String},
	"battery": {type: String},
	"os": {type: String},
	"price": {
		type: Number,
		min: 0,
	},
	"label": {
		type: String,
		required: true,
	},
}
);

module.exports = mongoose.model('laptops', schema);
