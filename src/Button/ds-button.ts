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

  @property({ type: Types.IconName }) icon = Types.IconName.None;

  @property({ type: Boolean }) iconRight = false;

  renderIcon() {
    if (this.icon && this.icon !== Types.IconName.None) {
      return html`<ds-icon .name=${this.icon} .size=${this.size}></ds-icon>`;
    }
    return null;
  }

  render() {
    return html`
      <button
        @click="${this._handleClick}"
        ?disabled=${this.disabled}
        class=${clsx(this.size, {
          raised: !this.outline,
          outline: this.outline,
          reverse: this.iconRight,
        })}
      >
        ${this.renderIcon()}
        <slot></slot>
      </button>
    `;
  }

  _handleClick() {
    const event = new Event('on-click');
    this.dispatchEvent(event);
  }
}
