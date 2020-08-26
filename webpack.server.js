const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server/index.js',

    target: 'node',

    externals: [nodeExternals()],

    output: {
        path: path.resolve('server-build'),
        filename: 'index.js'
    },

    module: {
        // rules: [
        //     {
        //         test: /\.js$/,
        //         use: 'babel-loader'
        //     }
        // ]
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
            // { test: /\.(scss|css)$/,   use: [
            //     // Translates CSS into CommonJS
            //     'css-loader',
            //     // Compiles Sass to CSS
            //     'sass-loader',
            //   ]
            // }
          ]
    }
};