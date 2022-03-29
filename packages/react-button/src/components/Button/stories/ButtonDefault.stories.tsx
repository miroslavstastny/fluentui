import * as React from 'react';
import { Button, ButtonProps } from '../../../Button';
import { makeStyles, makeStaticStyles, shorthands } from '@griffel/react';
import { LitButton } from '../../lit/lit-button';

customElements.define('lit-button', LitButton);

const useStyles = makeStyles({
  container: {
    flexDirection: 'column',
  },
  litButtonWrapper: {
    color: 'salmon',
    '& lit-button::part(ok-button)': {
      backgroundColor: 'salmon',
    },
  },

  litButton: {
    color: 'cornflowerblue',
    outlineStyle: 'none',
    '&::part(ok-button)': {
      // backgroundColor: 'salmon',
    },
  },
});

const useStaticStyles = makeStaticStyles({
  'lit-button': {
    outline: '3px dashed red',
  },
  p: {
    color: '#666',
  },
});

export const Default = (props: ButtonProps) => {
  useStaticStyles();

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.litButtonWrapper}>
        <p>Styles for :host and ::part overwritten using a class applied on a wrapper</p>
        <lit-button />
        <lit-button primary />
      </div>
      <div>
        <p>The lit-button bellow has makeStyles applied directly on itself</p>
        <lit-button class={classes.litButton} />
      </div>
    </div>
  );
};
