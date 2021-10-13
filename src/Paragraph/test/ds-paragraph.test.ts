import { html } from 'lit';
import { fixture, expect, assert } from '@open-wc/testing';
import { Paragraph } from '../ds-paragraph';

describe('Paragraph', () => {
  it('should be defined and passes the a11y audit', async () => {
    const component = await fixture<Paragraph>(
      html`<ds-paragraph>Foo bar</ds-paragraph>`
    );

    assert.instanceOf(component, Paragraph);
    expect(component).shadowDom.to.be.accessible();
  });

  it('should be render a medium paragraph by default', async () => {
    const component = await fixture<Paragraph>(
      html`<ds-paragraph>Foo bar</ds-paragraph>`
    );
    const element = component.shadowRoot!.querySelector('p');

    expect(element).to.exist;
    expect(element).to.have.class('medium');
    expect(component.textContent).to.equal('Foo bar');
  });

  it('should be render a large paragraph by size property', async () => {
    const component = await fixture<Paragraph>(
      html`<ds-paragraph size="large">Foo bar</ds-paragraph>`
    );
    const element = component.shadowRoot!.querySelector('p');

    expect(component.size).to.equal('large');
    expect(element).to.have.class('large');
  });
});
