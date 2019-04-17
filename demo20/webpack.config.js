const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 引入html-webpack-plugin插件,作用是添加模板到编译完成后的dist的文件里面
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'mobx', 'mobx-react'],
    bundle: __dirname + '/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[hash:8].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less'],
    mainFiles: ['index'],
    alias: {},
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // 本地服务器所加载的页面所在的目录
    publicPath: "/",
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    hot: true,  // 热加载
    host: '127.0.0.1',  // 主机地址
    port: 9000,  // 端口号
    compress: true,  // 开发服务器是否启动gzip等压缩
    proxy: {
        "/api": {
          target: 'http://172.13.2.10:8080/',
          changeOrigin: true
        }
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: "index.html",
      template: "./src/index.ejs",
      minify: { // 压缩 HTML 的配置
        minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
        minifyJS: true // 压缩 HTML 中出现的 JS 代码
      }
    }),
  ],
  optimization: {
    sideEffects: false,
    splitChunks: {
      minSize: 40000, // 分离前的最小文件大小，单位-字节
      chunks: 'all', // 匹配的块的类型：initial(初始块)、async(按需加载的异步块)、all(所有块)
      cacheGroups: { // 缓存组，存放分离代码块的规则对象。
        vendors: {
          test: 'vendor',
          name: 'vendor',
          priority: 10, // 优先级。当需要优先匹配缓存组的规则时为正数，当需要优先匹配默认设置时为负数
          enforce: true //
        },
      }
    }
  }
}
