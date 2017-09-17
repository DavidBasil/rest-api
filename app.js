var express = require('express')

// express app
var app = express()


// listen to port
app.listen(process.env.port || 3000, function(){
  console.log('Server running on port 3000...')		
})

