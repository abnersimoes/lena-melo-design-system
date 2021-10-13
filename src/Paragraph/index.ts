import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import styles from './styles';
import * as Types from '../types';

@customElement('ds-paragraph')
export class Paragraph extends LitElement {
  static styles = styles;

  @property({ type: Types.Size })
  size = Types.Size.Medium;

  render() {
    return html`
      <p class=${this.size}>
        <slot></slot>
      </p>
    `;
  }
}
