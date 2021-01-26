// module.exports = {
//   "stories": [
//     "../stories/**/*.stories.mdx",
//     "../../react-examples/src/react-button/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ],
// }

var custom = require('@fluentui/scripts/storybook/webpack.config');

module.exports = {
  stories: ['../../react-examples/src/react-button/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (/** @type {webpack.Configuration} */ config) => {
    config = custom(config);
    //
    // config.module.rules.push({
    //   // Special loader that only includes stories from the current package
    //   // test: /\.storybook[/\\]preview.js/,
    //   // loader: path.resolve(__dirname, 'preview-loader.js'),
    // });

    return config;
  },
  refs: {
    chromatic: {
      title: 'Published to Chromatic',
      url: 'https://60088dd0e49a64002183357c-xfkprfmjan.chromatic.com/',
    },
  },
};
