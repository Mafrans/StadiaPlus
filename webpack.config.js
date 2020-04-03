const path = require('path');
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    {
                        loader: 'style-loader',
                        options: {
                            insert: 'html',
                        }
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    {
                        loader: 'style-loader',
                        options: {
                            insert: 'html',
                        }
                    },
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.txt$/i,
                use: 'raw-loader',
            },
        ],
    },
    plugins: [
        new TypedocWebpackPlugin({
            name: 'Contoso',
            mode: 'file',
        }, './src')
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};