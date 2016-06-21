var express = require('express')
    app = express(),
    request = require('request'),
    url = require('url'),
    promise = require('bluebird'),
    request = promise.promisify(require('request'));

app.get('/*', function (req, res) {
  var query = url.parse(req.url).query; //get query params from url
  //req.pipe(request('http://lyrics.wikia.com/api.php?' + query)).pipe(res);
  request('http://lyrics.wikia.com/api.php?' + query)
    .then(function (response) {
      //console.log(response.body);
      res.send(response.body);
    })
    .catch(function (err) {
      res.send(err);
    })
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})