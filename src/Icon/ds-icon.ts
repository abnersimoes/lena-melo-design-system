import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import * as Types from '../types';
import styles from './styles';

@customElement('ds-icon')
export class Icon extends LitElement {
  static styles = styles;

  @property({ type: Types.Size }) size = Types.Size.Medium;

  @property({ type: Types.IconName }) name = Types.IconName.Home;

  render() {
    return html` <span class=${this.size}> ${this.name} </span> `;
  }
}
