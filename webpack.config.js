const path = require('path');

const PATHS = {

  app: path.resolve(__dirname, 'src/app.js'),
  build: path.resolve(__dirname, 'public')
};

module.exports = (env) => {
    
  const isProduction = (env == 'production');

  return {

    entry: PATHS.app,
    output: {
      'path': PATHS.build,
      'filename': 'bundle.js'

    },
    resolve: { extensions: ['.jsx', '.js', '.json'] },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        }
      }
      ]
    },

    devServer: {
      port: 2700,
      contentBase: path.join(__dirname, 'public')
    },

    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map'
    // devtool : 'cheap-module-eval-source-map'

  };

};