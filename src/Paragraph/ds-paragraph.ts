import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import * as Types from '../types';
import styles from './styles';

@customElement('ds-paragraph')
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
