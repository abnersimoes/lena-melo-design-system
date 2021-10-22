import { expect, fixture, elementUpdated } from '@open-wc/testing';
import { html } from 'lit';
import sinon from 'sinon';
import * as Types from '../../types';
import '../../Icon/ds-icon';
import '../ds-button';
import { ButtonBase } from '../ds-button.base';

describe('Button', () => {
  let component: ButtonBase;
  let element: HTMLElement;
  let iconLeft: HTMLElement;
  let iconRight: HTMLElement;

  beforeEach(async () => {
    component = await fixture<ButtonBase>(html`
      <ds-button>
        <ds-icon slot="icon-left" name="navigate_before"></ds-icon>
        Foo bar
        <ds-icon slot="icon-right" name="navigate_next"></ds-icon>
      </ds-button>
    `);
    element = component.shadowRoot!.querySelector('button')!;
    iconLeft = element.querySelector('slot[name=icon-left]')!;
    iconRight = element.querySelector('slot[name=icon-right]')!;
  });

  it('should be render a medium button by default', async () => {
    expect(element).to.exist;
    expect(iconLeft).to.exist;
    expect(iconRight).to.exist;
    expect(element).to.have.class('medium');
    expect(element).not.to.have.class('outline');
    expect(element).not.to.have.class('raised');
    expect(element).to.have.property('disabled', false);
    expect(component.textContent).to.string('Foo bar');
  });

  it('should be render a large outline disabled button by properties', async () => {
    component.size = Types.Size.Large;
    component.outline = true;
    component.raised = true;
    // @ts-ignore
    component.disabled = true;

    await elementUpdated(component);

    expect(component.size).to.equal('large');
    expect(element).to.have.class('large');
    expect(element).to.have.class('outline');
    expect(element).to.have.class('raised');
    expect(element).to.have.property('disabled', true);
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

  it('should be button defined and passes the a11y audit', async () => {
    expect(component).shadowDom.to.be.accessible();
  });
});
