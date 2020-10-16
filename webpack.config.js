const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清理/dist文件夹
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')

const env = process.env.NODE_ENV

// 合并./index.html
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './index.html'),
  filename: 'index.html' // 生成的内存中首页的名称
})

// 每次打包清理dist文件
const cleanWebpackPlugin = new CleanWebpackPlugin()

// 压缩打包后的代码
const UglifyJsPlugin = new UglifyJsWebpackPlugin()

// 分环境注入构建插件
const devPlugins = [htmlPlugin]
const prodPlugins = [cleanWebpackPlugin, UglifyJsPlugin]
const createPlugin = () => {
  return env === 'dev' ? devPlugins : prodPlugins
}

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    library: 'MiniEditor',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'miniEditor.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: createPlugin()
}
