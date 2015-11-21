var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
      'fixed': './examples/fixed/fixed.js',
      'random': './examples/random/random.js',
    },
    output: {
        path: __dirname + '/build',
        filename: '[name]-bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                query: {
                  presets: 'es2015',
                },
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
