const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

const plugins = () => {
  const base = [
    new HtmlWebpackPlugin({
      title: 'Crypto Tracker',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      meta: {
        viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
  ];

  if (isProduction) {
    base.push(new BundleAnalyzerPlugin());
  }

  return base;
};

const aliases = () => {
  const base = {
    Components: path.resolve(__dirname, 'src/components'),
    Assets: path.resolve(__dirname, 'src/assets'),
    Constants: path.resolve(__dirname, 'src/constants'),
    Pages: path.resolve(__dirname, 'src/pages'),
    Styles: path.resolve(__dirname, 'src/styles'),
    Helpers: path.resolve(__dirname, 'src/helpers'),
    Hooks: path.resolve(__dirname, 'src/hooks'),
    Models: path.resolve(__dirname, 'src/models'),
  };

  return base;
};

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  target: 'web',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.css', '.scss', '.ts', '.tsx'],
    alias: aliases(),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve('./tsconfig.json'),
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets',
        },
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: plugins(),
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: isDevelopment,
    port: 3000,
  },
};
