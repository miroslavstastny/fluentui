import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Provider, teamsTheme, Button, Dropdown, Input } from '@fluentui/react-northstar';
//
// export const NativeListDivExample = () => {
//   const [open, setOpen] = React.useState(true);
//   const containerRef = React.useRef<any>();
//
//   return (
//     <>
//       <input />
//
//       <button ref={containerRef} onClick={() => setOpen(!open)}>
//         Native List in Div
//       </button>
//
//       {open && (
//         <div>
//           <ul>
//             <li onClick={() => {}}>1</li>
//             <li onClick={() => {}}>2</li>
//             <li onClick={() => {}}>3</li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };
//
// export const RefContainerNativeListDiv = () => {
//   const inputRef = React.createRef<HTMLInputElement>();
//   const onSearchInputKeyDown = React.useCallback(() => {}, []);
//
//   return <NativeListDivExample />;
// };
//
// export const RefContainer = () => {
//   const inputRef = React.createRef<HTMLInputElement>();
//   const onSearchInputKeyDown = React.useCallback(() => {}, []);
//   // defaultSearchQuery="1"
//
//   const [open, setOpen] = React.useState(true);
//   const handleOpen = React.useCallback(() => {
//     console.log('handleOpen');
//     setOpen(x => !x);
//   }, []);
//
//   const [sq, setSQ] = React.useState(1);
//
//   const handleSQ = React.useCallback(() => {
//     setSQ(old => old + 1);
//   }, []);
//
//   return (
//     <div>
//       <button onClick={handleSQ}>{'' + sq}</button>
//       <Input />
//       <input />
//       <Dropdown
//         searchInput={{ id: 'dldInput' }}
//         defaultSearchQuery={'' + sq}
//         // search
//         onOpenChange={handleOpen}
//         open={open}
//         placeholder="dropdown"
//         items={['1', '2', '11', '22', '3']}
//       />
//     </div>
//   );
// };
//
// export const DropdownLeakDemo = () => {
//   const [show, toggle] = React.useState(false);
//
//   const buttonTitle = React.useMemo(() => {
//     if (show) return 'hide';
//     else return 'show';
//   }, [show]);
//
//   const toggleDropdown = React.useCallback(() => toggle(prev => !prev), [toggle]);
//
//   return (
//     <>
//       <h3>Dropdown Leak Demo</h3>
//       <Button id="dldButton" content={buttonTitle} onClick={toggleDropdown} />
//       {show ? <RefContainer /> : null}
//     </>
//   );
// };
//
// export const NativeListDivDemo = () => {
//   const [show, toggle] = React.useState(false);
//
//   const buttonTitle = React.useMemo(() => {
//     if (show) return 'hide';
//     else return 'show';
//   }, [show]);
//
//   const toggleDropdown = React.useCallback(() => toggle(prev => !prev), [toggle]);
//
//   return (
//     <>
//       <h3>Dropdown Leak Demo</h3>
//       <Button content={buttonTitle} onClick={toggleDropdown} />
//       {show ? <RefContainerNativeListDiv /> : null}
//     </>
//   );
// };
//
// const App = () => {
//   const [stateValue, setStateValue] = React.useState(0);
//   const upState = React.useCallback(() => setStateValue(value => value + 1), [setStateValue]);
//   return (
//     <Provider theme={teamsTheme}>
//       <h3>Last render: {new Date().toString()}</h3>
//       <input />
//
//       <button title={'+1'} onClick={upState}>
//         Update parent state
//       </button>
//       <h3>DropdownLeakDemo</h3>
//       <DropdownLeakDemo />
//       <h3>NativeListDivDemo</h3>
//       <NativeListDivDemo />
//     </Provider>
//   );
// };
//
// const sleep = async (timeout: number) => {
//   return new Promise<void>(resolve => {
//     setTimeout(resolve, timeout);
//   });
// };
//
// (window as any).test = async () => {
//   const setInputValue = (value: string) => {
//     const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')!.set;
//     let dldInput = document.getElementById('dldInput');
//     nativeInputValueSetter!.call(dldInput, value);
//     const ev2 = new Event('input', { bubbles: true });
//     dldInput!.dispatchEvent(ev2);
//     dldInput = null;
//   };
//
//   document.getElementById('dldButton')!.click();
//   await sleep(100);
//   setInputValue('2');
//   await sleep(100);
//   setInputValue('3');
//   await sleep(100);
//   document.getElementById('dldButton')!.click();
//   await sleep(100);
//   console.log('done');
// };
//

const values = ['1', '2', '11', '22', '3'];
const App = () => {
  const [show, setShow] = React.useState(false);
  const [filter, setFilter] = React.useState('');
  const handleShow = React.useCallback(() => {
    setShow(prev => !prev);
  }, []);

  const handleFilterChange = React.useCallback(e => {
    setFilter(e.target.value);
  }, []);

  const handleItemClick = React.useCallback(e => {
    console.log('click', e.target.innerText);
    e.stopPropagation();
  }, []);

  return (
    <div>
      <button onClick={handleShow}>{show ? 'hide' : 'show'}</button>
      {show && (
        <div>
          <input onChange={handleFilterChange} />
          <p>Filter: {filter}</p>
          <div>
            <ul>
              {values
                .filter(v => v.startsWith(filter))
                .map(v => (
                  <li key={v} onClick={handleItemClick}>
                    {v}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
