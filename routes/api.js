var express = require('express')
var router = express.Router()
var Ninja = require('../models/ninja')

// get a list of ninjas
router.get('/ninjas', function(req, res, next){
	res.send({
		type: 'GET'
	})
})
// create a new ninja
router.post('/ninjas', function(req, res, next){
	Ninja.create(req.body).then(function(ninja){
		res.send(ninja)
	}).catch(next)
})
// update a ninja
router.put('/ninjas/:id', function(req, res, next){
	res.send({
		type: 'PUT'
	})
})
// delete a ninja
router.delete('/ninjas/:id', function(req, res, next){
	Ninja.findByIdAndRemove({_id: req.params.id})
		.then(function(ninja){
			res.send(ninja)
		})
})

// export module
module.exports = router
