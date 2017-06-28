var path = require("path");

module.exports = {
    entry: {
        home: "./client/home/index.jsx"
    },
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            { test: /\.(jsx)$/, use: "babel-loader" }
        ]
    }
}