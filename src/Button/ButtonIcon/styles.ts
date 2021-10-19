import { css } from 'lit';

export default css`
  ds-icon.none {
    display: none;
  }

  .small .icon-left {
    margin-left: calc(-1 * var(--spacing-outset-xxxs));
    margin-right: var(--spacing-outset-xxs);
  }

  .medium .icon-left,
  .large .icon-left {
    margin-left: calc(-1 * var(--spacing-outset-xxs));
    margin-right: var(--spacing-outset-xs);
  }

  .small .icon-right {
    margin-left: var(--spacing-outset-xxs);
    margin-right: calc(-1 * var(--spacing-outset-xxxs));
  }

  .medium .icon-right,
  .large .icon-right {
    margin-left: var(--spacing-outset-xs);
    margin-right: calc(-1 * var(--spacing-outset-xxs));
  }
`;
