import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  button,
  a {
    font-family: var(--asset-font-regular-name);
    font-weight: var(--font-weight-bold);
    border-radius: var(--border-radius-sm);
    background: none;
    border: 0;
    color: var(--color-primary-pure);
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all var(--motion-duration-level-little-fast) ease-out 0s;
  }

  .small {
    height: 2rem;
    font-size: var(--font-size-xxs);
    padding: 0 var(--spacing-inset-xs);
  }

  .medium {
    height: 3rem;
    font-size: var(--font-size-xs);
    padding: 0 var(--spacing-inset-sm);
  }

  .large {
    height: 4rem;
    font-size: var(--font-size-sm);
    padding: 0 var(--spacing-inset-md);
  }

  .raised {
    background-color: var(--color-primary-pure);
    color: var(--color-neutral-high-light);
  }

  .outline {
    border: var(--border-width-thin) solid var(--color-primary-pure);
  }

  .raised:hover,
  .outline:hover {
    background-color: var(--color-primary-medium);
    color: var(--color-neutral-high-light);
  }

  .outline:hover {
    border-color: var(--color-primary-medium);
  }

  button:active,
  a:active {
    color: var(--color-primary-medium);
  }

  .raised:active,
  .outline:active {
    background-color: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
    transition-duration: 0s;
  }

  button[disabled],
  button[disabled]:hover,
  button[disabled]:active {
    cursor: default;
    background-color: var(--color-neutral-high-medium);
    color: var(--color-primary-pure);
    border: none;
  }
`;
