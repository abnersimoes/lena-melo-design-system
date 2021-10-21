import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './styles';

@customElement('demo-content')
export class DemoContent extends LitElement {
  static styles = styles;

  render() {
    return html` <slot></slot> `;
  }
}
