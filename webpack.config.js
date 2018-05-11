var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'lib');
var APP_PATH = path.resolve(ROOT_PATH, 'app');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.js')
    },
    output: {
        path: BUILD_PATH,
        filename: 'build.js'
    },
    resolve:{
        extensions:['.js','.jsx'],
        modules: [__dirname, 'node_modules']
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                loaders: ['babel-loader'],
                include: APP_PATH
            },{
                test:/\.css$/,
                loaders:['style-loader','css-loader']
            },
        ]
    }
}