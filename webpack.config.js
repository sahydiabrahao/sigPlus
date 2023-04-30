const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }, {
        loader: 'sass-loader'
      }]
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        loader: 'file-loader'
      }]
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    }
    ]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: {
      directory: './public'
    },
    historyApiFallback: true,
    port: 8080,
    host: '127.0.0.1'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
