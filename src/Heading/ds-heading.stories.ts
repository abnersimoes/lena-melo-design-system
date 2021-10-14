import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Story } from '../../stories/types';
import * as Types from '../types';
import './ds-heading';

export default {
  title: 'Heading',
  component: 'ds-heading',
  argTypes: {
    size: { control: { type: 'select', options: Object.values(Types.Size) } },
    priority: { control: { type: 'select', options: [1, 2, 3, 4, 5, 6] } },
  },
};

interface ArgTypes {
  size?: Types.Size;
  priority?: Types.HeadingPriority;
}

const Template: Story<ArgTypes> = ({ size, priority }: ArgTypes) => html`
  <ds-heading size=${ifDefined(size)} priority=${ifDefined(priority)}>
    Heading component
  </ds-heading>
`;

export const Default = Template.bind({});

export const Size = Template.bind({});
Size.args = {
  size: Types.Size.Large,
};

export const Priority = Template.bind({});
Priority.args = {
  priority: Types.HeadingPriority.h2,
};
