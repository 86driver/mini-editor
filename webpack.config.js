const { resolve } = require('path')
module.exports = {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'miniEditor.js',
        path: resolve(__dirname, 'dist')
    }
}

