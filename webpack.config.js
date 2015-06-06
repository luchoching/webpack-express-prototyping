var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
  //the base path which will be used to resolve entry points
  context: __dirname,
  entry: './client.js'
};

config.output = {
  path: path.join(__dirname, 'build'),
  filename: 'bundle.js'
};

config.resolve = {
  
};

config.plugins = [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: 'jquery'
  })
];
