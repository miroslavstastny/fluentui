import * as React from 'react';
import { MyAttachment } from './StardustAttachment';

export const ChildComponent = () => {
  const [state, setState] = React.useState(0);

  const changeState = React.useCallback(() => {
    setState(state => state + 1);
  }, []);

  return (
    <>
      <button onClick={changeState}>Click here to set</button>
      {state === 2 ? <MyAttachment /> : <span> {state} </span>}
    </>
  );
};
