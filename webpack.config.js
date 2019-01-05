const path = require('path')
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

var webpackIsomorphicToolsPlugin = 
  // webpack-isomorphic-tools settings reside in a separate .js file 
  // (because they will be used in the web server code too).
  new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-config.js'))
  // also enter development mode since it's a development webpack configuration
  // (see below for explanation)
  .development()
module.exports = {
    mode: 'production',
    entry: {
      app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './dist'),
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
              "presets":['react',['es2015',{"modules": false}],"stage-0"],
            }
        },
        {
          test: webpackIsomorphicToolsPlugin.regularExpression('images'),
          loader: 'url-loader?limit=1024', // any image below or equal to 10K will be converted to inline base64 instead
        }
      ],
    },
    plugins:
    [
  
      webpackIsomorphicToolsPlugin
    ]
};