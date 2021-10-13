/* eslint-disable lit/no-invalid-html */
/* eslint-disable lit/binding-positions */
import { LitElement } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import * as Types from '../types';
import styles from './styles';

@customElement('ds-heading')
export class Heading extends LitElement {
  static styles = styles;

  @property({ type: Types.Size })
  size = Types.Size.Medium;

  @property({ type: Types.HeadingPriority })
  priority = Types.HeadingPriority.span;

  getTagName() {
    return this.priority;
  }

  render() {
    const tag = this.getTagName();

    return html`
      <${unsafeStatic(tag)} class=${this.size}>
        <slot></slot>
      </${unsafeStatic(tag)}>
    `;
  }
}
