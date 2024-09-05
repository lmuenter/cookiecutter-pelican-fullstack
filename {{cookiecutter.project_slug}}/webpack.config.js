const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./config');

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: {
        main: [
          "./theme/static/js/vendors.js",
          "./theme/static/js/project.js",
          "./theme/static/sass/project.scss"
        ]
    },
    resolve: {
        alias: {
            '@fonts': path.resolve(__dirname, "theme/static/fonts"),
            '@images': path.resolve(__dirname, "theme/static/images"),
        }
    },
    cache: {
        type: 'filesystem',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(scss)$/,
                exclude: /config.PROJECT_SLUG/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext][query]',
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext][query]',
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ],
    output: {
        path: path.resolve(__dirname, './theme/static/dist'),
        filename: 'bundle.js'
    }
};
