import { css } from 'lit';

export default css`
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
