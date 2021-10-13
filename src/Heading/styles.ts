import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  .small {
    font-size: var(--size-font-xs);
    margin-bottom: var(--size-spacing-outset-xxs);
    font-weight: var(--asset-font-bold-weight);
  }

  .medium {
    font-size: var(--size-font-md);
    margin-bottom: var(--size-spacing-outset-xs);
    font-weight: var(--asset-font-regular-weight);
  }

  .large {
    font-size: var(--size-font-xl);
    margin-bottom: var(--size-spacing-outset-sm);
    font-weight: var(--asset-font-light-weight);
  }
`;
