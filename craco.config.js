const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.publicPath = env === 'production' ? '/puppeteer' : '/';
      return webpackConfig;
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1890FF' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};