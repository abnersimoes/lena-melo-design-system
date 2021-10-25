import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  p {
    font-weight: var(--font-weight-light);
    margin: 0;
  }

  .small {
    font-size: var(--font-size-xxxs);
    margin-bottom: var(--spacing-outset-xxs);
  }

  .medium {
    font-size: var(--font-size-xs);
    margin-bottom: var(--spacing-outset-xs);
  }

  .large {
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-outset-sm);
  }

  .marginless {
    margin: 0;
  }
`;
