import { expect, fixture, assert } from '@open-wc/testing';
import { html } from 'lit';
import sinon from 'sinon';
import { ButtonBase } from '../../ds-button.base';
import { ButtonIcon } from '../ds-button-icon';

describe('Button Icon', () => {
  it('should be button icon defined and passes the a11y audit', async () => {
    const component = await fixture(
      html`<ds-button-icon>Foo bar</ds-button-icon>`
    );

    assert.instanceOf(component, ButtonIcon);
    expect(component).shadowDom.to.be.accessible();
  });

  it('should be render a medium button with hide icons by default', async () => {
    const component = await fixture(
      html`<ds-button-icon>Foo bar</ds-button-icon>`
    );
    const element = component.shadowRoot!.querySelector('button');
    const iconLeft = component.shadowRoot!.querySelector('.icon-left');
    const iconRight = component.shadowRoot!.querySelector('.icon-right');

    expect(element).to.exist;
    expect(iconLeft).to.exist;
    expect(iconRight).to.exist;
    expect(element).to.have.class('medium');
    expect(element).not.to.have.class('outline');
    expect(element).not.to.have.class('raised');
    expect(element).to.have.property('disabled', false);
    expect(component.textContent).to.equal('Foo bar');
    expect(iconLeft).not.to.have.class('has-icon');
    expect(iconRight).not.to.have.class('has-icon');
  });

  it('should be render a large outline disabled button with icons by properties', async () => {
    const component = await fixture<ButtonBase>(
      html`<ds-button-icon
        size="large"
        outline
        raised
        disabled
        iconLeft="home"
        iconRight="home"
        >Foo bar</ds-button-icon
      >`
    );
    const element = component.shadowRoot!.querySelector('button');
    const iconLeft = component.shadowRoot!.querySelector('.icon-left');
    const iconRight = component.shadowRoot!.querySelector('.icon-right');

    expect(component.size).to.equal('large');
    expect(element).to.have.class('large');
    expect(element).to.have.class('outline');
    expect(element).to.have.class('raised');
    expect(element).to.have.property('disabled', true);
    expect(iconLeft).to.have.class('has-icon');
    expect(iconRight).to.have.class('has-icon');
  });

  it('should be calls _handleClick when a button is clicked', async () => {
    const component = await fixture<ButtonBase>(
      html`<ds-button-icon>Foo bar</ds-button-icon>`
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
      html`<ds-button-icon disabled>Foo bar</ds-button-icon>`
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
