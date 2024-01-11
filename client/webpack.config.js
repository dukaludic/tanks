const path = require('path')
const fileURLToPath = require('url')
const { dirname } = require('path')

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            projectReferences: true,
          },
        },
        include: [path.join(__dirname, 'src')],
      },
      { test: /\.html$/, use: 'html-loader', exclude: /node_modules/ },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      images: path.resolve(__dirname, 'src/images'),
    },
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
