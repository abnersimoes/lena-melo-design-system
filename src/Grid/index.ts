import { html, LitElement } from 'lit';
// import { property } from 'lit/decorators.js';
// import * as Types from '../types';
import styles from './styles';

export class Grid extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
