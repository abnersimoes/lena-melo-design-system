import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import clsx from 'clsx';
import { ButtonMixin } from './ds-button.mixin';
import { ButtonBase } from './ds-button.base';
import stylesBase from './styles.base';

// @ts-ignore
@customElement('ds-button')
export class Button extends ButtonMixin(ButtonBase) {
  static get styles() {
    return stylesBase;
  }

  render() {
    return html`
      <button
        @click="${this._handleClick}"
        ?disabled=${this.disabled}
        class=${clsx(this.size, {
          raised: this.raised,
          outline: this.outline,
        })}
      >
        <slot></slot>
      </button>
    `;
  }
}
