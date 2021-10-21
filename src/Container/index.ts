import { html, LitElement } from 'lit';
import styles from './styles';

export class Container extends LitElement {
  static styles = styles;

  render() {
    return html`<slot></slot>`;
  }
}
