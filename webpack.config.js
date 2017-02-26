'use strict'

const path = require('path')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV
const BUILD_DIR = 'public'
const APP_DIR = 'src'

module.exports = {
    target: "node",

    entry: {
        app: "./src/codeGenerate.ts"
    },

    node: {
        __dirname: false,
        __filename: false,
    },

    output: {
        path: path.join(__dirname, BUILD_DIR),
        filename: '[name].js'
    },

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module : {
        loaders: [
            { test: /\.tsx?$/, loaders: ["awesome-typescript-loader"] }
        ]
    },

    devtool: (NODE_ENV != 'production' ? "inline-source-map" : null),

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(NODE_ENV == 'production')
        })
    ]
}