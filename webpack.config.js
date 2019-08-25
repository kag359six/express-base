const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/server.js',
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'dist'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: 'bundle-api.js', // string
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  target: 'node',
  watchOptions: {
    ignored: ['**/*.test.js', 'node_modules'],
  },
  externals: [nodeExternals()],
  plugins: [new NodemonPlugin()],
}
