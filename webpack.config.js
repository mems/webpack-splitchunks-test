import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const EXTRACT = false;
const SPLIT_CHUNKS = false;
const PRIORITY = false;

export default {
  mode: "production",
  devtool: false,
  entry: ["./src/style1.css", "./src/style2.css"],
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[contenthash].js",
    chunkFilename: "[contenthash].js",
    clean: true,
  },
  experiments: {
    css: true,
  },
  module: {
    rules: [
      EXTRACT
        ? {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        }
        : null,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      template: "./index.html",
    }),
    EXTRACT
      ? new MiniCssExtractPlugin({
        filename: "[contenthash].css",
        chunkFilename: "[contenthash].css",
      })
      : null,
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        ...(SPLIT_CHUNKS
          ? {
            style1: {
              test: /style1/,
              enforce: true,
              priority: PRIORITY ? 20 : undefined,
            },
            style2: {
              test: /style2/,
              enforce: true,
              priority: PRIORITY ? 10 : undefined,
            },
          }
          : {
            defaultVendors: false,
            default: false,
          }),
      },
    },
  },
};
