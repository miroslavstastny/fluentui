import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, teamsTheme, Button, Dropdown } from '@fluentui/react-northstar';

export const NativeListDivExample = () => {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<any>();

  return (
    <>
      <button ref={containerRef} onClick={() => setOpen(!open)}>
        Native List in Div
      </button>

      {open && (
        <div>
          <ul>
            <li onClick={() => {}}>1</li>
            <li onClick={() => {}}>2</li>
            <li onClick={() => {}}>3</li>
          </ul>
        </div>
      )}
    </>
  );
};

export const RefContainerNativeListDiv = () => {
  const inputRef = React.createRef<HTMLInputElement>();
  const onSearchInputKeyDown = React.useCallback(() => {}, []);

  return <NativeListDivExample />;
};

export const RefContainer = () => {
  const inputRef = React.createRef<HTMLInputElement>();
  const onSearchInputKeyDown = React.useCallback(() => {}, []);
  // defaultSearchQuery="1"

  const [open, setOpen] = React.useState(true);
  const handleOpen = React.useCallback(() => {
    console.log('handleOpen');
    setOpen(x => !x);
  }, []);

  const [sq, setSQ] = React.useState(1);

  const handleSQ = React.useCallback(() => {
    setSQ(old => old + 1);
  }, []);

  return (
    <div>
      <button onClick={handleSQ}>{'' + sq}</button>
      <Dropdown
        defaultSearchQuery={'' + sq}
        search
        onOpenChange={handleOpen}
        open={open}
        placeholder="dropdown"
        items={['1', '2', '3']}
      />
    </div>
  );
};

export const DropdownLeakDemo = () => {
  const [show, toggle] = React.useState(false);

  const buttonTitle = React.useMemo(() => {
    if (show) return 'hide';
    else return 'show';
  }, [show]);

  const toggleDropdown = React.useCallback(() => toggle(prev => !prev), [toggle]);

  return (
    <>
      <p>Dropdown Leak Demo</p>
      <Button content={buttonTitle} onClick={toggleDropdown} />
      {show ? <RefContainer /> : null}
    </>
  );
};

export const NativeListDivDemo = () => {
  const [show, toggle] = React.useState(false);

  const buttonTitle = React.useMemo(() => {
    if (show) return 'hide';
    else return 'show';
  }, [show]);

  const toggleDropdown = React.useCallback(() => toggle(prev => !prev), [toggle]);

  return (
    <>
      <p>Dropdown Leak Demo</p>
      <Button content={buttonTitle} onClick={toggleDropdown} />
      {show ? <RefContainerNativeListDiv /> : null}
    </>
  );
};

const App = () => {
  const [stateValue, setStateValue] = React.useState(0);
  const upState = React.useCallback(() => setStateValue(value => value + 1), [setStateValue]);
  return (
    <Provider theme={teamsTheme}>
      <p>Last render: {new Date().toString()}</p>
      <button title={'+1'} onClick={upState}>
        Update parent state
      </button>
      <h3>DropdownLeakDemo</h3>
      <DropdownLeakDemo />
      <h3>NativeListDivDemo</h3>
      <NativeListDivDemo />
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
