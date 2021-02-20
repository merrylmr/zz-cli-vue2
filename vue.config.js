module.exports = {
  configureWebpack: {
    externals: [],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/var.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://uc.test.zhuzi.me/api/',
        // 线上环境
        // target: 'https://uc.zhuzi.com.cn/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  productionSourceMap: false
}