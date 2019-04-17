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
    // 删除不必要的后缀自动补全，少了文件后缀的自动匹配，即减少了文件路径查询的工作
    // 其他文件可以在编码时指定后缀，如 import('./index.scss')
    extensions: ['.js', '.jsx', '.json', '.less'],
    // 避免新增默认文件，编码时使用详细的文件路径，代码会更容易解读，也有益于提高构建速度
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
    // new CopyWebpackPlugin([{
    //   from: __dirname + '/public',
    // }])
    // new webpack.ProvidePlugin({
    //   _: 'lodash' //所有页面都会引入 _ 这个变量，不用再import引入
    // }),
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
