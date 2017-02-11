const path = require('path'),
      webpack = require('webpack'),
      merge = require('webpack-merge'),
      pug = require('./webpack/pug'),
      devserver = require('./webpack/devserver'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      sass = require('./webpack/sass'),
      extractCss = require('./webpack/css.extract'),
      css = require('./webpack/css')

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build')
}

const common = merge([
  {
    entry: {
      'index': PATHS.source + '/pages/index/index.js',
      'blog': PATHS.source + '/pages/blog/blog.js'
    },
    output: {
      path: PATHS.build,
      filename: './js/[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/pages/index/index.pug'
      }),
      new HtmlWebpackPlugin({
        filename: 'blog.html',
        chunks: ['blog', 'common'],
        template: PATHS.source + '/pages/blog/blog.pug'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
      })
    ],
  },
  pug()
])


module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      extractCss()
    ])
  }
  if (env === 'development') {
    return merge([
      common,
      sass(),
      css(),
      devserver()
    ]);
  }
};