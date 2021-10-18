import { html } from 'lit';
import { fixture, expect, assert } from '@open-wc/testing';
import { Icon } from '../ds-icon';

describe('Icon', () => {
  it('should be defined and passes the a11y audit', async () => {
    const component = await fixture<Icon>(
      html`<ds-icon name="help"></ds-icon>`
    );

    assert.instanceOf(component, Icon);
    expect(component).shadowDom.to.be.accessible();
  });

  it('should be render a medium icon by default', async () => {
    const component = await fixture<Icon>(
      html`<ds-icon name="help"></ds-icon>`
    );
    const element = component.shadowRoot!.querySelector('span');

    expect(element).to.exist;
    expect(element).to.have.class('medium');
    expect(element?.textContent?.trim()).to.equal('help');
  });

  it('should be render a large icon by size property', async () => {
    const component = await fixture<Icon>(
      html`<ds-icon size="large" name="help"></ds-icon>`
    );
    const element = component.shadowRoot!.querySelector('span');

    expect(component.size).to.equal('large');
    expect(element).to.have.class('large');
  });
});
