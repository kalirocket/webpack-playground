const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // Set contenthash for new port for old code
        filename: '[name].[contenthash].js',
        // Delete all unused hashed files
        clean: true,
        // Make asset name stay the same to prevent weird namings
        assetModuleFilename: '[name][ext]' 
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true, 
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    // loaders for styles and css
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, 
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'

            }
        ]
    },
    // Create html boilerplate
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')  
        }),
        new BundleAnalyzerPlugin()
    ]
}