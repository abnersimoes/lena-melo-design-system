import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import clsx from 'clsx';
import * as Types from '../../types';
import { ButtonMixin } from '../ds-button.mixin';
import { ButtonBase } from '../ds-button.base';
import stylesBase from '../styles.base';
import styles from './styles';

// @ts-ignore
@customElement('ds-button-icon')
export class ButtonIcon extends ButtonMixin(ButtonBase) {
  static get styles() {
    return [stylesBase, styles];
  }

  @property({ type: Types.IconName }) iconLeft = Types.IconName.None;

  @property({ type: Types.IconName }) iconRight = Types.IconName.None;

  _hasIconLeft(): boolean {
    return this.iconLeft !== Types.IconName.None;
  }

  _hasIconRight(): boolean {
    return this.iconRight !== Types.IconName.None;
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
        <ds-icon
          .name=${this.iconLeft}
          .size=${this.size}
          class=${clsx('icon-left', { 'has-icon': this._hasIconLeft() })}
        ></ds-icon>

        <slot></slot>

        <ds-icon
          .name=${this.iconRight}
          .size=${this.size}
          class=${clsx('icon-right', { 'has-icon': this._hasIconRight() })}
        ></ds-icon>
      </button>
    `;
  }
}
