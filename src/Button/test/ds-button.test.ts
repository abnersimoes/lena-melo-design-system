import { expect, fixture, assert } from '@open-wc/testing';
import { html } from 'lit';
import sinon from 'sinon';
import { Button } from '../ds-button';
import { ButtonBase } from '../ds-button.base';

describe('Button', () => {
  it('should be button defined and passes the a11y audit', async () => {
    const component = await fixture(html`<ds-button>Foo bar</ds-button>`);

    assert.instanceOf(component, Button);
    expect(component).shadowDom.to.be.accessible();
  });

  it('should be render a medium button by default', async () => {
    const component = await fixture(html`<ds-button>Foo bar</ds-button>`);
    const element = component.shadowRoot!.querySelector('button');

    expect(element).to.exist;
    expect(element).to.have.class('medium');
    expect(element).not.to.have.class('outline');
    expect(element).not.to.have.class('raised');
    expect(element).to.have.property('disabled', false);
    expect(component.textContent).to.equal('Foo bar');
  });

  it('should be render a large outline disabled button by properties', async () => {
    const component = await fixture<ButtonBase>(
      html`<ds-button size="large" outline raised disabled>Foo bar</ds-button>`
    );
    const element = component.shadowRoot!.querySelector('button');

    expect(component.size).to.equal('large');
    expect(element).to.have.class('large');
    expect(element).to.have.class('outline');
    expect(element).to.have.class('raised');
    expect(element).to.have.property('disabled', true);
  });

  it('should be calls _handleClick when a button is clicked', async () => {
    const component = await fixture<ButtonBase>(
      html`<ds-button>Foo bar</ds-button>`
    );
    const element = component.shadowRoot!.querySelector('button');
    // @ts-ignore
    const handleClickStub = sinon.stub(component, '_handleClick');

    component.requestUpdate();
    await component.updateComplete;

    element?.click();

    expect(handleClickStub).to.have.callCount(1);
  });

  it('should be not calls _handleClick when a disabled button is clicked', async () => {
    const component = await fixture<ButtonBase>(
      html`<ds-button disabled>Foo bar</ds-button>`
    );
    const element = component.shadowRoot!.querySelector('button');
    // @ts-ignore
    const handleClickStub = sinon.stub(component, '_handleClick');

    component.requestUpdate();
    await component.updateComplete;

    element?.click();

    expect(handleClickStub).to.have.callCount(0);
  });
});
