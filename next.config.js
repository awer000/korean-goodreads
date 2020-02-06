// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSass = require('@zeit/next-sass');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withCss = require('@zeit/next-css');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const compressionPlugin = require('compression-webpack-plugin');

module.exports = withBundleAnalyzer(
  withCss(
    withSass({
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
      },
      sassLoaderOptions: {
        sourceMap: true,
      },
      distDir: '.next',
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../../bundles/server.html',
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../bundles/client.html',
        },
      },
      cssModules: true,
      webpack(config) {
        const plugins = [...config.plugins];
        if (process.env.NODE_ENV === 'production') {
          plugins.push(new compressionPlugin());
        }
        return {
          ...config,
          mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
          devtool: process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'eval',
          plugins,
        };
      },
    }),
  ),
);
