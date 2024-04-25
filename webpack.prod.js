const path = require('path');

module.exports = {
  entry: {
    main: './server.js'
  },
  output: {
    path: path.join(__dirname, 'dev_build'),
    publicPath: '/',
    filename: '[name].js',
    clean: true
  },
  mode: 'development',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  }
};
