import { html, css, LitElement } from 'lit';
// import { property } from 'lit/decorators.js';

export class Paragraph extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    p {
      color: pink;
    }
  `;

  render() {
    return html`
      <p>
        <slot></slot>
      </p>
    `;
  }
}
