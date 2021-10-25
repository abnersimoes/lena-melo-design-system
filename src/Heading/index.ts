/* eslint-disable lit/no-invalid-html */
/* eslint-disable lit/binding-positions */
import { LitElement } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';
import clsx from 'clsx';
import * as Types from '../types';
import styles from './styles';

export class Heading extends LitElement {
  static styles = styles;

  @property({ type: Types.Size })
  size = Types.Size.Medium;

  @property({ type: Types.HeadingPriority })
  priority = Types.HeadingPriority.default;

  @property({ type: Boolean }) marginless = false;

  getTag() {
    if (this.priority && this.priority >= 1 && this.priority <= 6) {
      return `h${this.priority}`;
    }
    return Types.HeadingPriority.default;
  }

  render() {
    const tag = this.getTag();

    return html`
      <${unsafeStatic(tag)} class=${clsx(this.size, {
      marginless: this.marginless,
    })}>
        <slot></slot>
      </${unsafeStatic(tag)}>
    `;
  }
}
