module.exports = {
  devServer:{
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://wuge.com',
        changOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}