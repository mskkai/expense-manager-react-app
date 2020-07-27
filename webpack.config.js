const path = require("path");

//Input and Output File - Start point and End point for Webpack
module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },

  //Loader - provides customization while loading the files. Rules will allos to customize
  //how we want use our loader
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  //setting up the build mode of the application it has lot of in-built features and
  //optimizations set by the web-pack. see docs for the list of options when using different modes
  mode: "development",

  //to display the source files, the best optimized ones.
  devtool: "cheap-module-eval-source-map",

  //setting up the dev server
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
  },
};
