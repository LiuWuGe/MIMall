module.exports = {
  devServer:{
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  // publicPath: '/app',
  // outputDir: 'dest',
  // indexPath: 'index2.html',
  // lintOnSave: false,
  productionSourceMap: true,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  }
}