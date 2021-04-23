import * as React from 'react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withPerformance } from 'storybook-addon-performance';
import { withFluentProvider, withKeytipLayer, withStrictMode } from '@fluentui/storybook';

addDecorator(withInfo);
addDecorator(withPerformance);
addDecorator(withKeytipLayer);
addCustomDecorators();

addParameters({
  a11y: {
    manual: true,
  },
  viewMode: 'story', // docs, story
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
      index: -1,
    },
    canvas: {
      title: 'Story, not canvas',
      hidden: false,
    },
  },
  options: {
    storySort: {
      order: ['Concepts/Introduction', 'Concepts', 'Components', [['_README']]],
    },
  },
});

configure(loadStories, module);

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Concepts/Introduction', 'Concepts', 'Components'],
    },
  },

};

// ================================
//          Helpers
// ================================

/**
 * Add various storybook decorators narrowed by package name.
 *
 * NOTE:
 *  - this is a temporary workaround until we migrate to new storybook 6 APIs -> old `addDecorator` duplicates rendered decorators
 *  - source of this function is interpolated during runtime with webpack
 *  - "PACKAGE_NAME" placeholder is being replaced
 */
function addCustomDecorators() {
  /**
   * @type {Set<import('@storybook/react').DecoratorFn>}
   */
  const customDecorators = new Set();

  if (
    ['react-button', 'react-cards', 'react-checkbox', 'react-slider', 'react-tabs', 'react-toggle'].includes(
      'PACKAGE_NAME',
    )
  ) {
    initializeIcons();
    customDecorators.add(withStrictMode);
  }

  if (
    [
      'react-avatar',
      'react-badge',
      'react-button',
      'react-divider',
      'react-image',
      'react-link',
      'react-accordion',
      'react-menu',
      'react-text',
      'react-components',
      'react-portal',
    ].includes('PACKAGE_NAME')
  ) {
    customDecorators.add(withFluentProvider).add(withStrictMode);
  }

  customDecorators.forEach(decorator => addDecorator(decorator));
}

/**
 *
 * @param {string} storyName
 */
function getStoryOrder(storyName) {
  const order = ['Concepts/Introduction', 'Concepts', 'Components'];
  for (let i = 0; i < order.length; i++) {
    if (storyName.startsWith(order[i])) {
      return i;
    }
  }
  return order.length;
}

/**
 * @typedef {{
 *   default: { title: string, id: string };
 *   [subStoryName: string]: React.FunctionComponent | { title: string, id: string };
 * }} Story
 */

/**
 * @typedef {{ [exportName: string]: React.ComponentType }} ComponentModule
 */

function loadStories() {
  /** @type {Map<string, Story>} */
  const stories = new Map();

  /** @type {__WebpackModuleApi.RequireContext[]} */
  const contexts = [
    // This will be updated by preview-loader with the actual current package name
    require.context('../src/PACKAGE_NAME', true, /\.(Example|stories)\.tsx$/),
  ];

  // @ts-ignore -- PACKAGE_NAME is replaced by a loader
  if ('PACKAGE_NAME' === 'react' || 'PACKAGE_NAME' === 'react-components') {
    // For suite package storybooks, also show the examples of re-exported component packages.
    // preview-loader will replace REACT_ DEPS with the actual list.
    contexts.push(
      require.context('../src', true, /(REACT_DEPS|PACKAGE_NAME)\/\w+\/[\w.]+\.(Example|stories)\.(tsx|mdx)$/),
    );
  }

  for (const req of contexts) {
    req.keys().forEach(key => {
      generateStoriesFromExamples(key, stories, req);
    });
  }

  // convert stories Set to array
  const sorted = [...stories.values()].sort((s1, s2) => {
    const order1 = getStoryOrder(s1.default.title);
    const order2 = getStoryOrder(s2.default.title);
    if (order1 < order2) {
      // the lowest order goes first
      return -1;
    }
    if (order1 > order2) {
      return 1;
    }
    return s1.default.title > s2.default.title ? 1 : -1;
  });
  return sorted;
}

/**
 * @param {string} key - key for the module in require.context (the relative path to the module
 * from the root path passed to require.context)
 * @param {Map<string, Story>} stories
 * @param {__WebpackModuleApi.RequireContext} req
 */
function generateStoriesFromExamples(key, stories, req) {
  // Depending on the starting point of the context, and the package layout, the key will be like one of these:
  //   ./ComponentName/ComponentName.Something.Example.tsx
  //   ./package-name/ComponentName/ComponentName.Something.Example.tsx
  const segments = key.split('/');
  if (segments.length < 3) {
    return;
  }

  if (key.endsWith('.mdx')) {
    // out out of the custom naming for mdx, use meta information
    stories.set(key, req(key));
    return;
  }

  /** @type {string} */
  let componentName;

  // Story URLs are generated based off the story name
  // In the case of `react-components` a (package name) suffix is added to each story
  // This results in a difference name and URL between individual storybooks and the react-components suite storyboo
  // https://storybook.js.org/docs/react/configure/sidebar-and-urls#permalinking-to-stories
  // Use the id property in stories to ensure the same URL between individual and suite storyboo
  /** @type {string} */
  let componentId;

  if (segments.length === 3) {
    // ./ComponentName/ComponentName.Something.Example.tsx
    componentName = segments[1];
    componentId = segments[1];
  } else {
    // ./package-name/ComponentName/ComponentName.Something.Example.tsx
    // For @fluentui/react, don't include the package name in the sidebar
    // @ts-ignore -- PACKAGE_NAME is replaced by a loader
    componentName = 'PACKAGE_NAME' === 'react' ? segments[2] : `${segments[2]} (${segments[1]})`;
    componentId = segments[2];
  }

  if (!stories.has(componentName)) {
    stories.set(componentName, {
      default: {
        title: 'Components/' + componentName,
        id: 'Components/' + componentId,
      },
    });
  }

  const storyName = segments
    .slice(-1)[0]
    .replace('.tsx', '')
    .replace(/\./g, '_');

  const story = stories.get(componentName);
  const exampleModule = /** @type {(key: string) => ComponentModule} */ (req)(key);

  if (!story) {
    console.warn(`No stories for component: ${componentName}`);
    return;
  }

  for (let moduleExport of Object.keys(exampleModule)) {
    const ExampleComponent = exampleModule[moduleExport];
    const subStoryName = moduleExport || storyName;

    if (typeof ExampleComponent === 'function') {
      if (ExampleComponent.prototype.render) {
        // class component
        story[subStoryName] = () => React.createElement(ExampleComponent);
      } else {
        // function component
        story[subStoryName] = /** @type {React.FunctionComponent} */ (ExampleComponent);
      }
    }
  }
}
