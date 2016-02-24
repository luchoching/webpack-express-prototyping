var path = require('path');
var webpack = require('webpack');

var nodeModulePath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.js');


var config = {
  devtool: 'eval'
};

config.entry= [
  'webpack/hot/dev-server',
  'webpack-dev-server/client?http://localhost:8080',
  mainPath
];

config.output= {
  path: buildPath,
  filename: 'bundle.js',
  publicPath: '/build'
};

config.module = {};
config.module.loaders= [
  {
    test: /\.(js|jsx)$/, 
    loader: 'babel',
    query: {
      presets: ['react', 'es2015']
    },
    exclude: [nodeModulePath]
  },
  { 
    test: /\.css$/, 
    loader: 'style!css'
  },
  { 
    test: /\.scss$/, 
    loader: 'style!css!sass' 
  },
  { 
    test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
    loader: 'url-loader?limit=100000' 
  }
];

config.plugins= [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    _: 'lodash',
    React: 'react'
  })
];
 
module.exports = config;
