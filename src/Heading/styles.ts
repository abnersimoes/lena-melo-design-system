import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span {
    margin: 0;
    font-weight: var(--font-weight-bold);
  }

  .small {
    font-size: var(--font-size-xs);
  }

  .medium {
    font-size: var(--font-size-md);
  }

  .large {
    font-size: var(--font-size-xl);
  }
`;
