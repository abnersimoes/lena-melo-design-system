import { html } from 'lit';
import { fixture, expect, elementUpdated } from '@open-wc/testing';
import * as Types from '../../types';
import { Heading } from '..';
import '../ds-heading';

describe('Heading', () => {
  let component: Heading;
  let elementDefault: HTMLElement;

  beforeEach(async () => {
    component = await fixture<Heading>(html`<ds-heading>Foo bar</ds-heading>`);
    elementDefault = component.shadowRoot!.querySelector('span')!;
  });

  it('should be render a medium heading span by default', async () => {
    expect(elementDefault).to.exist;
    expect(elementDefault).to.have.class('medium');
    expect(component.textContent).to.equal('Foo bar');
  });

  it('should be render a large marginless heading by size property', async () => {
    component.size = Types.Size.Large;
    component.marginless = true;

    await elementUpdated(component);

    expect(component.size).to.equal('large');
    expect(elementDefault).to.have.class('large');
    expect(elementDefault).to.have.class('marginless');
  });

  it('should be render a h2 by priority property', async () => {
    component.priority = Types.HeadingPriority.h2;

    await elementUpdated(component);

    expect(component.shadowRoot!.querySelector('h2')).to.exist;
  });

  it('should be defined and passes the a11y audit', async () => {
    expect(component).shadowDom.to.be.accessible();
  });
});
