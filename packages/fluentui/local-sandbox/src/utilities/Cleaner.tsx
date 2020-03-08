import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { MouseEventCleaner } from './MouseEventCleaner';
import { NestedUpdateCleaner } from './NestedUpdateCleaner';
import { sleep } from './sleep';

export async function Cleanup() {
  const document = window.document;
  const body = document.body;
  const memoryCleanupDiv = document.createElement('div');
  memoryCleanupDiv.setAttribute('id', 'memory-cleanup');
  /**
   * Append <div id="memory-cleanup" /> as sibling to <div id="app" />, which we will use as
   * the rendering container for the React memory cleanup work. This will avoid any conflicts
   * with the back-in-main scenario, where <div id="app" /> for the mainWindow will contain
   * React components we do not want to write over.
   */
  const memoryCleanupContainer = body.appendChild(memoryCleanupDiv);

  // Render React component to force memory leak cleanup (handles, detached window case).
  await sleep(0);

  ReactDOM.render(
    <>
      <MouseEventCleaner mainWindow={window} />
      <NestedUpdateCleaner />
    </>,
    memoryCleanupContainer
  );
  /**
   * Now that memory is freed up, clean up React components rendered in previous line, as well
   * as the <div id="app" /> sibling container, <div id="memory-cleanup" />.
   */
  ReactDOM.unmountComponentAtNode(memoryCleanupContainer);
  body.removeChild(memoryCleanupContainer);
}
