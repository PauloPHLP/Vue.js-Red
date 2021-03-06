const { plugins } = require('./plugins')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [...plugins],
    devServer: {
      historyApiFallback: true,
      watchOptions: { aggregateTimeout: 300, poll: 1000 },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      }
    }
  }
}
