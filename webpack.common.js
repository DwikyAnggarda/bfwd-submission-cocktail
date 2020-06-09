const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Nice Cocktail',
            template: "./src/index.html",
            filename: "index.html",
            'meta': {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no'
                // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            }
        }),
        new HtmlWebpackPlugin({
            title: 'About Me',
            template: "./src/about.html",
            filename: "about.html",
            'meta': {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no'
                // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Guide',
            template: "./src/guide.html",
            filename: "guide.html",
            'meta': {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no'
                // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            }
        }),
        new FaviconsWebpackPlugin('./src/img/iconcocktail.png')
    ]
};