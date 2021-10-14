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
  }

  .medium {
    font-size: var(--font-size-xs);
  }

  .large {
    font-size: var(--font-size-sm);
  }
`;
