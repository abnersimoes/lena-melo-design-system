import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  button {
    font-family: var(--asset-font-regular-name);
    font-weight: var(--font-weight-bold);
    border-radius: var(--border-radius-sm);
    background-color: var(--color-primary-pure);
    border: 0;
    color: var(--color-neutral-high-light);
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  button[disabled] {
    cursor: default;
    background-color: var(--color-neutral-high-medium);
    color: var(--color-neutral-low-light);
    border: none;
  }

  .outline {
    background: none;
    border: var(--border-width-thin) solid var(--color-primary-pure);
    color: var(--color-primary-pure);
  }

  .reverse {
    flex-direction: row-reverse;
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

  .small ds-icon {
    margin-left: calc(-1 * var(--spacing-outset-xxxs));
    margin-right: var(--spacing-outset-xxs);
  }

  .medium ds-icon,
  .large ds-icon {
    margin-left: calc(-1 * var(--spacing-outset-xxs));
    margin-right: var(--spacing-outset-xs);
  }

  .small.reverse ds-icon {
    margin-left: var(--spacing-outset-xxs);
    margin-right: calc(-1 * var(--spacing-outset-xxxs));
  }

  .medium.reverse ds-icon,
  .large.reverse ds-icon {
    margin-left: var(--spacing-outset-xs);
    margin-right: calc(-1 * var(--spacing-outset-xxs));
  }
`;
