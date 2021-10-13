import { html, LitElement, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import * as Types from '../types';

@customElement('ds-paragraph')
export class Paragraph extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    p {
      font-weight: var(--asset-font-light-weight);
    }

    .small {
      font-size: var(--size-font-xxxs);
      margin-bottom: var(--size-spacing-outset-xxxs);
    }

    .medium {
      font-size: var(--size-font-xs);
      margin-bottom: var(--size-spacing-outset-xxs);
    }

    .large {
      font-size: var(--size-font-sm);
      margin-bottom: var(--size-spacing-outset-xs);
    }
  `;

  @property({ type: Types.Size }) size = Types.Size.Medium;

  render() {
    return html`
      <p class=${this.size}>
        <slot></slot>
      </p>
    `;
  }
}
