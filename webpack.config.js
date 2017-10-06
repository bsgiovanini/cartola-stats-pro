const path = require('path');

const config = {
  entry: path.resolve(__dirname, 'src/client/index.js'),
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: 'http://localhost:6000/'
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: { presets: ['es2015', 'react'] } 
          }
        ]      
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings 
        }, {
            loader: "css-loader" // translates CSS into CommonJS 
        }, {
            loader: "sass-loader" // compiles Sass to CSS 
        }]
      },
      {
        test: /\.css$/, // Only .css files
        loader: "style-loader!css-loader"// Run both loaders
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      },

      
    ]
  }
};

module.exports = config;