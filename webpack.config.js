const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//Input and Output File - Start point and End point for Webpack
module.exports = (env) => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");
  return {
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
          use: CSSExtract.extract({
            use: [
              { loader: "css-loader", options: { sourceMap: true } },
              { loader: "sass-loader", options: { sourceMap: true } },
            ],
          }),
        },
      ],
    },

    plugins: [CSSExtract],
    //setting up the build mode of the application it has lot of in-built features and
    //optimizations set by the web-pack. see docs for the list of options when using different modes
    mode: isProduction ? "production" : "development",

    //to display the source files, the best optimized ones.
    devtool: isProduction ? "source-map" : "inline-source-map",

    //setting up the dev server
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};
