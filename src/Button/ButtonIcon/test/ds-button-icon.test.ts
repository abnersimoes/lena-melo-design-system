import { expect, fixture, elementUpdated } from '@open-wc/testing';
import { html } from 'lit';
import sinon from 'sinon';
import * as Types from '../../../types';
import { ButtonBase } from '../../ds-button.base';
import '../ds-button-icon';

describe('Button Icon', () => {
  let component: ButtonBase;
  let element: HTMLElement;
  let iconLeft: HTMLElement;
  let iconRight: HTMLElement;

  beforeEach(async () => {
    component = await fixture<ButtonBase>(
      html`<ds-button-icon>Foo bar</ds-button-icon>`
    );
    element = component.shadowRoot!.querySelector('button')!;
    iconLeft = component.shadowRoot!.querySelector('.icon-left')!;
    iconRight = component.shadowRoot!.querySelector('.icon-right')!;
  });

  it('should be render a medium button with hide icons by default', async () => {
    expect(element).to.exist;
    expect(iconLeft).to.exist;
    expect(iconRight).to.exist;
    expect(element).to.have.class('medium');
    expect(element).not.to.have.class('outline');
    expect(element).not.to.have.class('raised');
    expect(element).to.have.property('disabled', false);
    expect(component.textContent).to.equal('Foo bar');
    expect(iconLeft).to.have.class('none');
    expect(iconRight).to.have.class('none');
  });

  it('should be render a large outline disabled button with icons by properties', async () => {
    component.size = Types.Size.Large;
    component.outline = true;
    component.raised = true;
    // @ts-ignore
    component.disabled = true;
    // @ts-ignore
    component.iconLeft = Types.IconName.Home;
    // @ts-ignore
    component.iconRight = Types.IconName.Help;

    await elementUpdated(component);

    expect(component.size).to.equal('large');
    expect(element).to.have.class('large');
    expect(element).to.have.class('outline');
    expect(element).to.have.class('raised');
    expect(element).to.have.property('disabled', true);
    expect(iconLeft).not.to.have.class('none');
    expect(iconRight).not.to.have.class('none');
    expect(iconLeft).to.have.class('home');
    expect(iconRight).to.have.class('help');
  });

  it('should be calls _handleClick when a button is clicked', async () => {
    // @ts-ignore
    const handleClickStub = sinon.stub(component, '_handleClick');

    component.requestUpdate();
    await component.updateComplete;

    element?.click();

    expect(handleClickStub).to.have.callCount(1);
  });

  it('should be not calls _handleClick when a disabled button is clicked', async () => {
    // @ts-ignore
    const handleClickStub = sinon.stub(component, '_handleClick');
    // @ts-ignore
    component.disabled = true;
    await elementUpdated(component);

    component.requestUpdate();
    await component.updateComplete;

    element?.click();

    expect(handleClickStub).to.have.callCount(0);
  });

  it('should be button icon defined and passes the a11y audit', async () => {
    expect(component).shadowDom.to.be.accessible();
  });
});
