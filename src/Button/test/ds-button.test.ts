import { expect, fixture, elementUpdated } from '@open-wc/testing';
import { html } from 'lit';
import sinon from 'sinon';
import * as Types from '../../types';
import '../ds-button';
import { ButtonBase } from '../ds-button.base';

describe('Button', () => {
  let component: ButtonBase;
  let element: HTMLElement;

  beforeEach(async () => {
    component = await fixture<ButtonBase>(html`<ds-button>Foo bar</ds-button>`);
    element = component.shadowRoot!.querySelector('button')!;
  });

  it('should be render a medium button by default', async () => {
    expect(element).to.exist;
    expect(element).to.have.class('medium');
    expect(element).not.to.have.class('outline');
    expect(element).not.to.have.class('raised');
    expect(element).to.have.property('disabled', false);
    expect(component.textContent).to.equal('Foo bar');
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
