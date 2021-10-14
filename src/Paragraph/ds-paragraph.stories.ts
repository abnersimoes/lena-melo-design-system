import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Story } from '../../stories/types';
import * as Types from '../types';
import './ds-paragraph';

export default {
  title: 'Core Components/Typograph/Paragraph',
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

export const Paragraph = Template.bind({});
