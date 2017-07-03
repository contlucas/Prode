var path = require("path");

module.exports = {
    entry: {
        home: "./client/home/components/home.jsx",
        equipo: "./client/equipo/components/equipo.jsx",
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