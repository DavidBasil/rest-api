var express = require('express')
var routes = require('./routes/api')
var bodyParser = require('body-parser')

// express app
var app = express()

// body parser
app.use(bodyParser.json())

// routes
app.use('/api', routes)


// listen to port
app.listen(process.env.port || 3000, function(){
  console.log('Server running on port 3000...')		
})

