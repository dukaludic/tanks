const path = require('path')
const fileURLToPath = require('url')
const { dirname } = require('path')

module.exports = {
  devtool: 'cheap-source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts/,
        use: {
          loader: 'ts-loader',
          options: {
            projectReferences: true,
          },
        },
        include: [path.join(__dirname, 'src')],
      },
      { test: /\.html$/, use: 'html-loader', exclude: /node_modules/ },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      watch: true,
    },
    port: 3000,
  },
}
