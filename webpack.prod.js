const path = require('path');

module.exports = {
  mode: 'development', // or 'development'
  entry: './server.js',
  target: 'node', // Specify the target environment as Node.js
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  // Other webpack configuration options
};
