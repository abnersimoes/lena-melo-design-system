import { html } from 'lit';
import { fixture, expect, assert } from '@open-wc/testing';
import sinon from 'sinon';
import { Button } from '../ds-button';

describe('Button', () => {
  it('should be defined and passes the a11y audit', async () => {
    const component = await fixture<Button>(
      html`<ds-button>Foo bar</ds-button>`
    );

    assert.instanceOf(component, Button);
    expect(component).shadowDom.to.be.accessible();
  });

  it('should be render a medium button by default', async () => {
    const component = await fixture<Button>(
      html`<ds-button>Foo bar</ds-button>`
    );
    const element = component.shadowRoot!.querySelector('button');

    expect(element).to.exist;
    expect(element).to.have.class('medium');
    expect(element).not.to.haveOwnProperty('outline');
    expect(component.textContent).to.equal('Foo bar');
  });

  it('should be render a large outline button by properties', async () => {
    const component = await fixture<Button>(
      html`<ds-button size="large" outline>Foo bar</ds-button>`
    );
    const element = component.shadowRoot!.querySelector('button');

    expect(component.size).to.equal('large');
    expect(element).to.have.class('large');
    expect(element).to.have.class('outline');
  });

  it('should be calls _handleClick when a button is clicked', async () => {
    const component = await fixture<Button>(
      html`<ds-button>Foo bar</ds-button>`
    );
    const element = component.shadowRoot!.querySelector('button');
    const handleClickStub = sinon.stub(component, '_handleClick');

    component.requestUpdate();
    await component.updateComplete;

    element?.click();

    expect(handleClickStub).to.have.callCount(1);
  });
});
