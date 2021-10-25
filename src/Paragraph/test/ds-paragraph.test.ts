import { html } from 'lit';
import { fixture, expect, elementUpdated } from '@open-wc/testing';
import * as Types from '../../types';
import { Paragraph } from '..';
import '../ds-paragraph';

describe('Paragraph', () => {
  let component: Paragraph;
  let element: HTMLElement;

  beforeEach(async () => {
    component = await fixture<Paragraph>(
      html`<ds-paragraph>Foo bar</ds-paragraph>`
    );
    element = component.shadowRoot!.querySelector('p')!;
  });

  it('should be render a medium paragraph by default', async () => {
    expect(element).to.exist;
    expect(element).to.have.class('medium');
    expect(component.textContent).to.equal('Foo bar');
  });

  it('should be render a large marginless paragraph by size property', async () => {
    component.size = Types.Size.Large;
    component.marginless = true;

    await elementUpdated(component);

    expect(component.size).to.equal('large');
    expect(element).to.have.class('large');
    expect(element).to.have.class('marginless');
  });

  it('should be defined and passes the a11y audit', async () => {
    expect(component).shadowDom.to.be.accessible();
  });
});
