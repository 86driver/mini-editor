const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清理/dist文件夹


// 合并src/index.html
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html' // 生成的内存中首页的名称
});


module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
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
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        htmlPlugin,
        new CleanWebpackPlugin() // clean-webpack-plugin 将删除webpack的output.path目录中的所有文件
    ]
}

