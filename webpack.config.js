module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Navbar: 'app/components/Navbar.jsx',
      Wheater: 'app/components/Wheater.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      WheaterForm: 'app/components/WheaterForm.jsx',
      WheaterMessage: 'app/components/WheaterMessage.jsx',
      OpenWeatherMap: 'app/api/OpenWeatherMap.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
