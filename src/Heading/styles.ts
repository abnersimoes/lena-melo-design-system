import { css } from 'lit';
import { desktop } from '../helpers/breakpoints';

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
    font-weight: var(--font-weight-light);
    margin: 0;
    margin-bottom: var(--spacing-outset-xs);
    display: inline-block;
  }

  .small {
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-outset-xxxs);
  }

  .medium,
  .large {
    font-size: var(--font-size-md);
    margin-bottom: var(--spacing-outset-xxs);
  }

  .marginless {
    margin: 0;
  }

  ${desktop`
    .large {
      font-size: var(--font-size-xl);
      margin-bottom: var(--spacing-outset-xs);
    }
  `}
`;
