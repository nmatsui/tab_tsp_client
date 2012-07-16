exports.tunnel = function(req, res) {
  if (req.param('url')) {
    var url = require('url').parse(req.param('url'));
    require('http').get({
      host: url.hostname,
      path: url.pathname
    }, function(clientRes) {
      var body = '';
      clientRes.on('data', function(data) {
        body += data;
      });
      clientRes.on('end', function() {
        res.send(body);
      });
    }).on('error', function(err) {
      res.statusCode = 500;
      res.send(err.message);
    });
  }
  else {
    res.statusCode = 500;
    res.send("can't find target url");
  }
}
