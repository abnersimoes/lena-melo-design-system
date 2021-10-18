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

  @property({ type: Boolean }) disabled = false;

  @property({ type: Types.IconName }) icon = undefined;

  @property({ type: Boolean }) iconRight = false;

  render() {
    return html`
      <button
        @click="${this._handleClick}"
        ?disabled=${this.disabled}
        class=${clsx(this.size, {
          outline: this.outline,
          reverse: this.iconRight,
        })}
      >
        ${this.icon &&
        html` <ds-icon .name=${this.icon} .size=${this.size}></ds-icon>`}
        <slot></slot>
      </button>
    `;
  }

  _handleClick() {
    const event = new Event('on-click');
    this.dispatchEvent(event);
  }
}
