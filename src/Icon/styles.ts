import { css } from 'lit';

export default css`
  :host {
    display: block;
  }

  span {
    font-family: var(--asset-font-icon-name);
    font-style: var(--asset-font-icon-style);
    font-weight: var(--asset-font-icon-weight);
    font-size: var(--font-size-md);
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
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
