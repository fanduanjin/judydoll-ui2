const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    historyApiFallback: true,
    allowedHosts: 'all',
    proxy: {
      '/': {
        target: 'http://jlht.icu:5080/',
        changeOrigin: true,
        ws: false
      }
    }
  }
})
