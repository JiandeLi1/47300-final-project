
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const favicon = require('serve-favicon')

// create server
const app = express(); 

// LocalStrategy
const LocalStrategy = require('passport-local').Strategy;

// require router.js
const index = require('./api/routes/index')
const product = require('./api/routes/product')
const order = require('./api/routes/order')

// art-template engine
app.engine('html', require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Middleware 
app.use(bodyParser.json())
app.use(methodOverride('_method'))

// static path
app.use(express.static(__dirname + '/public'))
app.use('/node_modules/', express.static(__dirname + '/node_modules'))

app.use(cors());

// calling router.js
app.use(index)
app.use(product)
app.use(order)


app.listen(5000, (req, res) => {
    console.log('47300 is running at port 5000')
>>>>>>> Jiande_Li
})