var WebpackIsomorphicTools = require('webpack-isomorphic-tools');

global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./webpack-isomorphic-config'))
    .server('./', function () {
        //回调
        require('./server.js') //启动 server
  })