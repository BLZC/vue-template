// const path = require('path')
// const webpack = require('webpack')
// const httpType = 'http://'
const proxyUrl =
  'https://www.fastmock.site/mock/26e2031e7cde6d1b0c40597802d33e40/api';
// const proxyUrl = 'http://127.0.0.1:9090';
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
module.exports = {
  //   assetsDir: 'static',
  // 构建时不进行eslint校验
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 生产环境禁止source map
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/dev': {
        target: proxyUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/dev/': ''
        }
      }
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    // config.plugins.push(
    //   new BundleAnalyzerPlugin({
    //     analyzerMode: 'server',
    //     generateStatsFile: true,
    //     statsOptions: { source: false }
    //   })
    // );
  }
};
