const path = require('path');
const TypedocWebpackPlugin = require('typedoc-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = env => {
    return {
        entry: {
            app: './src/index.js',
            popup: './src/popup/src/main.js'
        },
        devtool: 'inline-source-map',
        mode: env.production ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                test: /\.vue$/,
                loader: 'vue-loader'
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
                    test: /\.(png|jpe?g|gif|svg)$/i,
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
            new VueLoaderPlugin(),
            new TypedocWebpackPlugin({
                name: 'Contoso',
                mode: 'file',
                out: './docs',
            }, './src')
        ],
        resolve: {
            extensions: [ '.tsx', '.ts', '.js' ],
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
        },
    }
};