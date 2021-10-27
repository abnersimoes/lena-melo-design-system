import { expect, fixture, elementUpdated } from '@open-wc/testing';
import { html } from 'lit';
import * as Types from '../../../types';
import { ButtonLink } from '..';
import '../../../Icon/ds-icon';
import '../ds-button-link';

describe('Button Icon', () => {
  let component: ButtonLink;
  let element: HTMLElement;
  let iconLeft: HTMLElement;
  let iconRight: HTMLElement;

  beforeEach(async () => {
    component = await fixture<ButtonLink>(
      html`<ds-button-link to="/foo">
        <ds-icon slot="icon-left" name="navigate_before"></ds-icon>
        bar
        <ds-icon slot="icon-right" name="navigate_next"></ds-icon
      ></ds-button-link>`
    );
    element = component.shadowRoot!.querySelector('a')!;
    iconLeft = element.querySelector('slot[name=icon-left]')!;
    iconRight = element.querySelector('slot[name=icon-right]')!;
  });

  it('should be render a medium link button default', async () => {
    expect(element).to.exist;
    expect(iconLeft).to.exist;
    expect(iconRight).to.exist;
    expect(element).to.have.class('medium');
    expect(element).not.to.have.class('outline');
    expect(element).not.to.have.class('raised');
    expect(element).to.have.property('href').contain('/foo');
    expect(component.textContent).to.string('bar');
  });

  it('should be render a large outline disabled link button by properties', async () => {
    component.size = Types.Size.Large;
    component.outline = true;
    component.raised = true;

    await elementUpdated(component);

    expect(component.size).to.equal('large');
    expect(element).to.have.class('large');
    expect(element).to.have.class('outline');
    expect(element).to.have.class('raised');
  });

  it('should be link button defined and passes the a11y audit', async () => {
    expect(component).shadowDom.to.be.accessible();
  });
});
