// https://code.tutsplus.com/series/introducing-the-wp-rest-api--cms-896
// https://developers.google.com/blogger/docs/3.0/getting_started
require("dotenv").config();

const bodyParser = require("body-parser")
const path = require('path')
const express = require('express')
const app = express()

const request = require('request-promise')
const helmet = require('helmet')
// const client = require('redis').createClient(process.env.REDIS_URL)
// const limiter = require('express-limiter')(app, client)
// const root = path.join(__dirname, 'dist')
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use(express.static(path.join(__dirname, 'dist')));
app.use(helmet())

const limiterOptions = {
	lookup: 'connection.remoteAddress',
	total: 150,
	// expire: 1000 * 60 * 60,
  // expire: 1000,
	onRateLimited: function (req, res, next) {
		res.status(429).send({error: 'Rate limit exceeded'})
	}
}

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/dist/index.html')
});

app.get('/api/v1/posts', function(req, res) {
	var options = {
		url: 'https://www.googleapis.com/blogger/v3/blogs/' + process.env.BLOG_ID + '/posts?key=' + process.env.BLOG_API_KEY + '&fetchImages=true',
		method: 'GET',
		json: true
	}
	request(options)
		.then(response => {
			res.status(200).json(response.items)
		})
		.catch(err => {
			res.status(500).json({
					status: 'error'
			})
		})
})

app.listen(port, () => {
	if(env === 'development'){
		console.info('Server running on port '+port)
	}
})

module.exports = app;
