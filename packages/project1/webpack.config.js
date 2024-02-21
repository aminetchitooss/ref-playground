const path = require('path');

module.exports = {
  mode: 'production', // or 'development' if you prefer
  entry: './src/functionA.ts',  
  output: {
    filename: 'bundle.js', // or any other filename you prefer
    path: path.resolve(__dirname, 'dist_webpack'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader'}
    ]
  },
};
