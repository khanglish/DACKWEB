let mongoose=require('mongoose');
var Schema= mongoose.Schema;

var schema= new Schema({
	user: {type: String, required: true},
	cart: {type: Object, required: true},
	address: {type: String, required: true},
	name: {type: String, required: true},
});
module.exports=mongoose.model('Order', schema);