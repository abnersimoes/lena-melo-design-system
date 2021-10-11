import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { DsLenaMelo } from '../src/DsLenaMelo.js';
import '../src/ds-lena-melo.js';

describe('DsLenaMelo', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<DsLenaMelo>(html`<ds-lena-melo></ds-lena-melo>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<DsLenaMelo>(html`<ds-lena-melo></ds-lena-melo>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<DsLenaMelo>(html`<ds-lena-melo title="attribute title"></ds-lena-melo>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<DsLenaMelo>(html`<ds-lena-melo></ds-lena-melo>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
