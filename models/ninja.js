var mongoose = require('mongoose')
var Schema = mongoose.Schema

// ninja schema
var NinjaSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']
	}, 
	rank: {
		type: String
	}, 
	available: {
		type: Boolean,
		default: false
	}
	// add in geo location
})

// ninja model
var Ninja = mongoose.model('ninja', NinjaSchema)

// export ninja model
module.exports = Ninja
