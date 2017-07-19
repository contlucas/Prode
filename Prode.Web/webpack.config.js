var path = require("path");

module.exports = {
    entry: {
        //home: "./client/home/components/home.jsx",
        //equipo: "./client/equipo/components/equipo.jsx",
        encuentro: "./client/encuentro/components/encuentro.jsx",
        login: "./client/login/components/login.jsx"
    },
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve("./client/dispatcher"),
            path.resolve("./client/common"),
            path.resolve("./client/common/components"),
            path.resolve("./node_modules")
        ]
    },
    module: {
        loaders: [
            {
                test: /\.(jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}