var express = require('express')
var router = express.Router()

// get a list of ninjas
router.get('/ninjas', function(req, res){
	res.send({
		type: 'GET'
	})
})
// create a new ninja
router.post('/ninjas', function(req, res){
	console.log(req.body)
	res.send({
		type: 'POST',
		name: req.body.name,
		rank: req.body.rank
	})
})
// update a ninja
router.put('/ninjas/:id', function(req, res){
	res.send({
		type: 'PUT'
	})
})
// delete a ninja
router.delete('/ninjas/:id', function(req, res){
	res.send({
		type: 'DELETE'
	})
})

// export module
module.exports = router
