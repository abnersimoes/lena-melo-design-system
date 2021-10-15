import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import clsx from 'clsx';
import * as Types from '../types';
import styles from './styles';

@customElement('ds-button')
export class Button extends LitElement {
  static styles = styles;

  @property({ type: Types.Size }) size = Types.Size.Medium;

  @property({ type: Boolean }) outline = false;

  render() {
    return html`
      <button
        @click="${this._handleClick}"
        class=${clsx(this.size, { outline: this.outline })}
      >
        <slot></slot>
      </button>
    `;
  }

  _handleClick() {
    const event = new Event('on-click');
    this.dispatchEvent(event);
  }
}
