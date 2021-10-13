import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../src/Paragraph/ds-paragraph';
import * as Types from '../src/types';
import { Story } from './types';

export default {
  title: 'Paragraph',
  component: 'ds-paragraph',
  argTypes: {
    size: { control: { type: 'select', options: Object.values(Types.Size) } },
  },
};

interface ArgTypes {
  size?: Types.Size;
}

const Template: Story<ArgTypes> = ({ size }: ArgTypes) => html`
  <ds-paragraph size=${ifDefined(size)}> Paragraph component </ds-paragraph>
`;

export const Default = Template.bind({});

export const Size = Template.bind({});
Size.args = {
  size: Types.Size.Large,
};
