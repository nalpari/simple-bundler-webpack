const path = require('path');

const baseConfig = {
    entry: {
        index: './src/index.js',
        main: './src/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    }
}

module.exports = baseConfig;