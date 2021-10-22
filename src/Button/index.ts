import { html } from 'lit';
import { property } from 'lit/decorators.js';
import clsx from 'clsx';
import { ButtonMixin } from './ds-button.mixin';
import { ButtonBase } from './ds-button.base';
import stylesBase from './styles.base';

export class Button extends ButtonMixin(ButtonBase) {
  static get styles() {
    return stylesBase;
  }

  @property({ type: Boolean }) disabled = false;

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
        <div class="icon-left">
          <slot name="icon-left"></slot>
        </div>

        <slot></slot>

        <div class="icon-right">
          <slot name="icon-right"></slot>
        </div>
      </button>
    `;
  }
}
