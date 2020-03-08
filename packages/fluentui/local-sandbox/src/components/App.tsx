import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ChildComponent } from './ChildComponent';
import { Provider, themes } from '@fluentui/react';

// import { StardustList } from "./components/StardustList";

export function ChildWindow(cleaner: () => void) {
  const childWindow = window.open();

  if (childWindow) {
    const childDocument = childWindow.document;

    const windowRoot = childDocument.createElement('div');
    childDocument.body.appendChild(windowRoot);

    let dispose: (() => void) | undefined;

    ReactDOM.render(
      <Provider theme={themes.teams} target={childDocument}>
        <ChildComponent />
      </Provider>,
      windowRoot
    );
    dispose = () => {
      ReactDOM.unmountComponentAtNode(windowRoot);
    };

    const intervalId = setInterval(() => {
      if (childWindow.closed) {
        if (dispose) {
          dispose();
          dispose = undefined;
        }
        clearInterval(intervalId);

        // Run Cleanup tasks on childWindow dispose
        cleaner();
      }
    }, 200);
  }
}
