const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[id].js'
    },
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    devtool: 'cheap-module-source-map',
    optimization: {
        minimizer: [
            new TerserPlugin({
                sourceMap: true
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyPlugin([
            {
                from: 'src/assets',
                to: 'assets'
            }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({
                                    browsers: ['last 5 versions']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    fallback: {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    }
                }
            }
        ]
    }
}