const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "production",
  context: `${__dirname}/client/src`,
  target: "web",
  entry: ["core-js", "./index.js"],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        sourceMap: true,
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-export-default-from",
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/transform-runtime"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        loader: [
          "style-loader",
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "root.bundle.js",
    path: `${__dirname}/public`
  }
};
