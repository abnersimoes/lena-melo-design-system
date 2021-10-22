import { html } from 'lit';
import { property } from 'lit/decorators.js';
import clsx from 'clsx';
import { ButtonBase } from '../ds-button.base';
import stylesBase from '../styles.base';
import styles from './styles';

export class ButtonLink extends ButtonBase {
  static get styles() {
    return [stylesBase, styles];
  }

  @property({ type: String }) to = '#';

  render() {
    return html`
      <a
        href=${this.to}
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
      </a>
    `;
  }
}
