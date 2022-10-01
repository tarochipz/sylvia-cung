import HtmlWebPackPlugin from "html-webpack-plugin";
import path from "path";
const htmlPlugin = new HtmlWebPackPlugin({
  template: "/src/index.html",
  filename: "/index.html",
});
const __dirname = path.resolve();

export default {
  entry: "/src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    static: "./dist",
    proxy: {
      "/api": "http://localhost:9090",
    },
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.svg$/, exclude: /node_modules/, use: ["@svgr/webpack"] },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
};
