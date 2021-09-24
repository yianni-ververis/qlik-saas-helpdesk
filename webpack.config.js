const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, argv) => {
  return {
    entry: ['./src/index.tsx'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      chunkFilename: 'js/[name].bundle.js',
      filename: 'js/[name].bundle.js',
    },
    devtool: 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      client: {
        overlay: false,
      },
      hot: true,
      port: 8080,
    },
    module: {
      rules: [
        {
          test: [/\.tsx?$/, /\.ts?$/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: [
                  '@babel/preset-react', 
                  ['@babel/preset-env', { targets: { node: 'current' } }], 
                  '@babel/typescript',
                ],
              },
            },
          ]
        },
        {
          test: /\.(eot|otf|png|jpg|svg|ttf|woff|woff2)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
      }),
      new ESLintPlugin({
        fix: true,
        extensions: ['.tsx', '.ts'],
        useEslintrc: true,
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
      symlinks: false,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  }
}