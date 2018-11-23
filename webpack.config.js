const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: [path.join(path.resolve(__dirname), 'src', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  plugins: [
    new webpack.IgnorePlugin(/^electron$/),
    new MiniCssExtractPlugin({ filename: 'lsf.min.css' }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      ['~']: path.resolve(__dirname + '/src')
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.(eot|ttf|woff|woff2)$/, use: 'url-loader' },
      {
        test: /\.js$/,
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        use: 'babel-loader'
      },
      { test: /\.(svg|ico)$/, use: 'file-loader' },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: { overlay: true }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
    new TerserPlugin({ parallel: true, terserOptions: { ecma: 6 } }),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
    new CopyWebpackPlugin([
      { from: './src/assets/manifest.json' },
      { from: './src/assets/images/**/icon-*', to: './images', flatten: true }
    ])
  ]);
} else {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new CopyWebpackPlugin([{ from: 'src/assets/vocabulaire.json' }])
  ]);
}
