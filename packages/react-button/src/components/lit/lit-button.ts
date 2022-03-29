import { tokens } from '@fluentui/react-theme';

import { LitElement, html, css, unsafeCSS } from 'lit-element';

// @customElement('lit-button')
export class LitButton extends LitElement {
  public static styles = css`
    :host {
      display: block;
      border: 5px solid ${unsafeCSS(tokens.colorBrandStroke1)}; /* Strings now allowed in css: https://github.com/lit/lit-element/issues/451 */
      padding: 4px;
      margin: 20px 0;
    }
    :host([primary]) {
      background-color: ${unsafeCSS(tokens.colorBrandBackground2)};
    }

    button {
      margin-left: 2px;
    }
    button:hover {
      background-color: var(--colorBrandBackground) /*!important*/;
    }
    button.cls-ok-button.cls-ok-button.cls-ok-button.cls-ok-button:hover {
      background-color: red;
    }
    button + button[part='ok-button'] {
      background-color: orange;
    }
    button#ok-button:hover {
      background-color: red;
    }
  `;

  public render() {
    return html`
      <div>This is <code>lit-button</code></div>
      <button>Cancel</button>
      <button class="cls-ok-button" part="ok-button">OK</button>
    `;
  }

  // protected createRenderRoot(): Element | ShadowRoot {
  //   return this;
  // }
}

// console.log('registering custom lit-button');
// customElements.define('lit-button', LitButton);
