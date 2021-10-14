import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Story } from '../../stories/types';
import * as Types from '../types';
import './ds-button';

export default {
  title: 'Components/Button',
  component: 'ds-button',
  argTypes: {
    size: { control: { type: 'select', options: Object.values(Types.Size) } },
    outline: { control: { type: 'boolean' } },
  },
};

interface ArgTypes {
  size?: Types.Size;
  outline: boolean;
}

const Template: Story<ArgTypes> = ({ size, outline }: ArgTypes) => html`
  <ds-button size=${ifDefined(size)} ?outline=${outline}>Button a</ds-button>
`;

export const Paragraph = Template.bind({});
Paragraph.args = {
  size: Types.Size.Medium,
};
