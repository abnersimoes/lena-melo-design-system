import { html } from 'lit';
import { fixture, expect, elementUpdated } from '@open-wc/testing';
import * as Types from '../../types';
import { Icon } from '..';
import '../ds-icon';

describe('Icon', () => {
  let component: Icon;
  let element: HTMLElement;

  beforeEach(async () => {
    component = await fixture<Icon>(html`<ds-icon name="help"></ds-icon>`);
    element = component.shadowRoot!.querySelector('span')!;
  });

  it('should be render a medium icon by default', async () => {
    expect(element).to.exist;
    expect(element).to.have.class('medium');
    expect(element?.textContent?.trim()).to.equal('help');
  });

  it('should be render a large icon by size property', async () => {
    component.size = Types.Size.Large;

    await elementUpdated(component);

    expect(component.size).to.equal('large');
    expect(element).to.have.class('large');
  });

  it('should be defined and passes the a11y audit', async () => {
    expect(component).shadowDom.to.be.accessible();
  });
});
