const defaultSettings = require('./src/settings.js')

module.exports = {
  transpileDependencies: true,
  devServer: {
    open: true,
    proxy: {
      '/admin': {
        target: defaultSettings.baseUrl,
        changeOrigin: true,
        pathRewrite:{
          '^/admin':'' //重写api，把api变成空字符，因为我们真正请求的路径是没有api的
        }
      }
    }
  },
}

let proxyObj = {};

proxyObj['/'] = {
  //websocket
  ws: false,
  //目标地址
  target: 'http://localhost:8080',
  //发送请求头中host会设置成target
  changeOrigin: true,
  //不重写请求地址
  pathRewrite: {
    '^/': '/'
  }
};
