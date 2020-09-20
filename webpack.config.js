const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

function commonConfig(isBrowser) {
  return {
    mode: 'development',
    devtool: 'source-map',
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
      ],
    },
    plugins: [new webpack.DefinePlugin({__isBrowser__: isBrowser})],
  };
}

const browserConfig = {
  entry: path.resolve(__dirname, 'src/client.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  ...commonConfig(true),
};

const serverConfig = {
  entry: path.resolve(__dirname, 'src/server.tsx'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/',
  },
  ...commonConfig(false),
};

module.exports = [browserConfig, serverConfig];
