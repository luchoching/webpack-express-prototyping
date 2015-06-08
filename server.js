var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? 8080 : 5000;
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

//We only want to run the workflow when not in production
if (!isProduction){
  var bundle = require('./server/bundle.js');
  bundle();

  //any request to localhost:5000/build is proxied to webpack-dev-server
  app.all('/build/*', function(req, res){
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

//catch proxy errors!
proxy.on('error', function(e){
  console.log('Could not connect to proxy, please try again...');
});


app.listen(port, function(){
  console.log('Server running on port ' + port);
});
