import * as React from 'react';
import { Attachment } from '@fluentui/react';

export const MyAttachment = (): JSX.Element => {
  return <Attachment onClick={() => console.log('ClickedOnAttachment')} />;
};
