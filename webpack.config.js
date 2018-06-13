const path = require('path');

const SRC_DIR = path.join(__dirname, 'client/src');

const DIST_DIR = path.join(__dirname, 'public');

module.exports = {
  styleLoader: 'style-loader!css-loader!sass-loader',
  styles: {
    mixins: true,
    'bordered-pulled': true,
    core: true,
    'fixed-width': true,
    icons: true,
    larger: true,
    list: true,
    path: true,
    'rotated-flipped': true,
    animated: true,
    stacked: true,
  },
  entry: [
    'webpack/hot/only-dev-server',
    'tether',
    'font-awesome/scss/font-awesome.scss',
    `${SRC_DIR}/index.jsx`,
  ],
  module: {
    rules: [
      {
        test: [/\.jsx$/, /font-awesome\.config\.js/],
        exclude: /node_modules/,
        include: SRC_DIR,
        use: [
          { loader: 'style-loader' },
          { loader: 'font-awesome-loader' },
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
            },
          }],
      },
    ],
  },
  output: {
    filename: 'bundle-carousel.js',
    path: DIST_DIR,
  },
};

