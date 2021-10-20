import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import * as Types from '../types';
import styles from './styles';

export class Paragraph extends LitElement {
  static styles = styles;

  @property({ type: Types.Size }) size = Types.Size.Medium;

  render() {
    return html`
      <p class=${this.size}>
        <slot></slot>
      </p>
    `;
  }
}
