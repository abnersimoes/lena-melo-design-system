import { css, unsafeCSS, CSSResult } from 'lit';
import {
  BreakpointMobile,
  BreakpointTablet,
  BreakpointDesktop,
} from 'lena-melo-design-tokens';

export function mediaQueryBuilder(
  breakpoint: string,
  styles: TemplateStringsArray
): CSSResult {
  const breakpointCSS = unsafeCSS(breakpoint);

  return css`
    @media only screen and (min-width: ${breakpointCSS}) {
      ${css(styles)};
    }
  `;
}

export function mobile(styles: TemplateStringsArray) {
  return mediaQueryBuilder(BreakpointMobile, styles);
}

export function tablet(styles: TemplateStringsArray) {
  return mediaQueryBuilder(BreakpointTablet, styles);
}

export function desktop(styles: TemplateStringsArray) {
  return mediaQueryBuilder(BreakpointDesktop, styles);
}
