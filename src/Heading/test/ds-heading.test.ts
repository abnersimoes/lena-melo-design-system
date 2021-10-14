import { html } from 'lit';
import { fixture, expect, assert } from '@open-wc/testing';
import { Heading } from '../ds-heading';

describe('Heading', () => {
  it('should be defined and passes the a11y audit', async () => {
    const component = await fixture<Heading>(
      html`<ds-heading>Foo bar</ds-heading>`
    );

    assert.instanceOf(component, Heading);
    expect(component).shadowDom.to.be.accessible();
  });

  it('should be render a medium heading span by default', async () => {
    const component = await fixture<Heading>(
      html`<ds-heading>Foo bar</ds-heading>`
    );
    const element = component.shadowRoot!.querySelector('span');

    expect(element).to.exist;
    expect(element).to.have.class('medium');
    expect(component.textContent).to.equal('Foo bar');
  });

  it('should be render a large heading by size property', async () => {
    const component = await fixture<Heading>(
      html`<ds-heading size="large">Foo bar</ds-heading>`
    );
    const element = component.shadowRoot!.querySelector('span');

    expect(component.size).to.equal('large');
    expect(element).to.have.class('large');
  });

  it('should be render a h2 by priority property', async () => {
    const component = await fixture<Heading>(
      html`<ds-heading priority="2">Foo bar</ds-heading>`
    );
    const element = component.shadowRoot!.querySelector('h2');

    expect(element).to.exist;
  });
});
