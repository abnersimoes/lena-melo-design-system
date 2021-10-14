/* eslint-disable lit/no-invalid-html */
/* eslint-disable lit/binding-positions */
import { LitElement } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { customElement, property } from 'lit/decorators.js';
import clsx from 'clsx';
import * as Types from '../types';
import styles from './styles';

@customElement('ds-heading')
export class Heading extends LitElement {
  static styles = styles;

  @property({ type: Types.Size })
  size = Types.Size.Medium;

  @property({ type: Types.HeadingPriority })
  priority = Types.HeadingPriority.default;

  getTag() {
    if (this.priority && this.priority > 0 && this.priority < 7) {
      return `h${this.priority}`;
    }
    return Types.HeadingPriority.default;
  }

  render() {
    const tag = this.getTag();

    return html`
      <${unsafeStatic(tag)} class=${clsx([this.size])}>
        <slot></slot>
      </${unsafeStatic(tag)}>
    `;
  }
}
