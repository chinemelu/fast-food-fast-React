const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = () => {
  const envVariable = dotenv.config();
  const envKeys = Object.keys(envVariable).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(envVariable[next]);
    return prev;
  }, {});

  return {
    entry: './client/src/index.jsx',
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'index_bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: '/node_modules/',
          use: {
            loader: 'babel-loader',
          }
        }, {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        },
      ]
    },
    plugins: [
      new HtmlwebpackPlugin({
        template: './client/index.html'
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    devtool: 'cheap-eval-source-map',
    devServer: {
      historyApiFallback: true
    },
    resolve: {
      extensions: ['.jsx', '.js', 'png']
    }
  };
};
