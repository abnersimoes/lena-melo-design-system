import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import clsx from 'clsx';
import * as Types from '../types';
import styles from './styles';

export class Paragraph extends LitElement {
  static styles = styles;

  @property({ type: Types.Size }) size = Types.Size.Medium;

  @property({ type: Boolean }) marginless = false;

  render() {
    return html`
      <p class=${clsx(this.size, { marginless: this.marginless })}>
        <slot></slot>
      </p>
    `;
  }
}
