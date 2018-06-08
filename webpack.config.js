const path = require('path');

const SRC_DIR = path.join(__dirname, 'client/src');

const DIST_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  module: {
    loaders: [
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000',
      }
    ],
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
};
