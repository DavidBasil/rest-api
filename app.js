var express = require('express')
var routes = require('./routes/api')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// express app
var app = express()

// db connection
mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise

// body parser
app.use(bodyParser.json())

// routes
app.use('/api', routes)

// error handling middleware
app.use(function(err, req, res, next){
	//console.log(err)
	res.status(422).send({error: err.message})
})


// listen to port
app.listen(process.env.port || 3000, function(){
  console.log('Server running on port 3000...')		
})

