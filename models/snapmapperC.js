// The Post model
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var snapmapperCSchema = new Schema({
	'Address': String,
	'City': String,
	'County': String,
	'Latitude': Number,
	'Longitude': Number,
	'State': String,
	'StoreName': String,
	'Zip': Number,
	'Zip2': Number,
	'_id': ObjectId,
	'loc': [Number, Number],
	'score': {type: Number, 'default': 0},
	'price': {type: Number, 'default':0},
	'variety': {type: Number, 'default':0},
	'service': {type: Number, 'default':0},
	'ratedBy': {type: Number, 'default': 0}
}, { collection: 'snapmapperC' });

module.exports = mongoose.model('snap1mapperC', snapmapperCSchema);