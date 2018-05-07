var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    "imagePath": {type: String},
    "model": {type: String},
    "price": {type: Number},
});

module.exports = mongoose.model('Laptop', schema);
