import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import * as Types from '../types';

export class ButtonBase extends LitElement {
  @property({ type: Types.Size }) size = Types.Size.Medium;

  @property({ type: Boolean }) outline = false;

  @property({ type: Boolean }) raised = false;

  @property({ type: Boolean }) disabled = false;
}
