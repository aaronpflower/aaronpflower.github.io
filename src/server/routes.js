const request = require('request-promise')

module.exports = app => {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist'))
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
}
