const path = require('path');
const pkg = require('./package.json');

module.exports = (env) => {
    const isProd = env ? !!env.prod : false;
    return {
        target: 'node',
        context: path.resolve(__dirname, 'src'),
        optimization: {
            usedExports: true
        },
        resolve: {
            extensions: ['.json', '.js', '.jsx', '.css', '.scss']
        },
        devtool: isProd ? '' : 'eval-cheap-module-source-map',
        entry: './index.js',
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            library: pkg.name,
            libraryTarget: 'umd'
        },
        mode: isProd ? 'production' : 'development',
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ['babel-loader', 'eslint-loader'],
                    exclude: /node_modules/,
                }
            ]
        }
    };
};
