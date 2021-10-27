import { css } from 'lit';
import { desktop } from '../helpers/breakpoints';

export default css`
  :host {
    display: block;
  }

  p {
    font-weight: var(--font-weight-light);
    margin: 0;
  }

  a {
    color: var(--color-primary-medium);
  }

  a:-webkit-any-link {
    color: var(--color-primary-medium);
  }

  a:-moz-any-link {
    color: var(--color-primary-medium);
  }

  a:any-link {
    color: var(--color-primary-medium);
  }

  a:-webkit-any-link {
    color: var(--color-primary-medium);
  }

  :-moz-any-link {
    color: var(--color-primary-medium);
  }

  :any-link {
    color: var(--color-primary-medium);
  }

  .small {
    font-size: var(--font-size-xxxs);
    margin-bottom: var(--spacing-outset-xxs);
  }

  .medium,
  .large {
    font-size: var(--font-size-xs);
    margin-bottom: var(--spacing-outset-xs);
  }

  .marginless {
    margin: 0;
  }

  ${desktop`
    .large {
      font-size: var(--font-size-sm);
      margin-bottom: var(--spacing-outset-sm);
    }
  `}
`;
