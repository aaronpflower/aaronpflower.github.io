// https://code.tutsplus.com/series/introducing-the-wp-rest-api--cms-896
// https://developers.google.com/blogger/docs/3.0/getting_started
require("dotenv").config();

const compression = require('compression')
const bodyParser = require("body-parser")
const path = require('path')
const express = require('express')
const app = express()
const favicon = require('serve-favicon');

const helmet = require('helmet')
// const client = require('redis').createClient(process.env.REDIS_URL)
// const limiter = require('express-limiter')(app, client)
// const root = path.join(__dirname, 'dist')
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'

app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(helmet())
app.use(favicon(__dirname + '/favicon.ico'));

const limiterOptions = {
	lookup: 'connection.remoteAddress',
	total: 150,
	// expire: 1000 * 60 * 60,
  // expire: 1000,
	onRateLimited: function (req, res, next) {
		res.status(429).send({error: 'Rate limit exceeded'})
	}
}

require('./src/server/routes')(app)

app.listen(port, () => {
	if(env === 'development'){
		console.info('Server running on port '+port)
	}
})

module.exports = app;
