// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");  // 引入html-webpack-plugin插件,作用是添加模板到编译完成后的dist的文件里面

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // 本地服务器所加载的页面所在的目录
    publicPath: "/",
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    hot: true, // 热加载
    host: '127.0.0.1', // 主机地址
    port: 9000, // 端口号
    compress: true, // 开发服务器是否启动gzip等压缩
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      use: [{
        loader: 'url-loader',
        query: {
          limit: 20000,
          name: 'img/[name]-[hash:5].[ext]'
        }
      }, {
        loader: 'image-webpack-loader'
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: "index.html",
      template: "./src/index.template.html",
    }),
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
