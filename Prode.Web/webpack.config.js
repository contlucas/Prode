﻿var path = require("path");

module.exports = {
    entry: {
        home: "./client/home/index.jsx",
        equipo: "./client/equipo/index.jsx",
        encuentro: "./client/encuentro/index.jsx"
    },
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.(jsx)$/, loader: "babel-loader", exclude: /node_modules/ }
        ]
    }
}