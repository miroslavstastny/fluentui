// @ts-check
import custom from '@fluentui/scripts/storybook/webpack.config';
import * as path from 'path';
import * as webpack from 'webpack';

export default {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    'storybook-addon-performance',
    {
      name: '@storybook/addon-knobs',
      options: { escapeHTML: false },
    },
    '@fluentui/storybook/lib/addons/fluent-tokens/register',
  ],
  webpackFinal: (/** @type {webpack.Configuration} */ config) => {
    const customConfig = custom(config);

    customConfig.module.rules.push({
      // Special loader that only includes stories from the current package
      test: /\.storybook[/\\]preview.js/,
      loader: path.resolve(__dirname, 'preview-loader.js'),
    });

    return customConfig;
  },
};
