module.exports = {
    // Other Webpack config options...
    module: {
      rules: [
        // Other rules...
        
        // Add a rule for font files
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'assets/fonts/[name].[hash].[ext]',
            },
          },
        },
      ],
    },
  };
  