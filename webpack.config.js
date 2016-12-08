var webpack = require('webpack');

module.exports={
    entry:{
        index:'./index.js',
        index2:'./index2.js'
    },
    output:{
        path:'./',
        filename:'build/[name].js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {presets: ['es2015']}
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    }
};