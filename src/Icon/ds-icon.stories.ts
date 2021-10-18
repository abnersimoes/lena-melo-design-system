import { html } from 'lit';
import { Story } from '../../stories/types';
import * as Types from '../types';
import './ds-icon';

export default {
  title: 'Components/Icon',
  component: 'ds-icon',
  argTypes: {
    name: {
      table: { category: 'Semantics' },
      description: 'Defines the icon by name',
      control: { type: 'select', options: Object.values(Types.IconNames) },
      defaultValue: Types.IconNames.Help,
    },
    size: {
      table: { category: 'Appearance' },
      description: 'Defines the size of icon',
      control: { type: 'radio', options: Object.values(Types.Size) },
      defaultValue: Types.Size.Medium,
    },
  },
};

interface ArgTypes {
  name: Types.IconNames;
  size: Types.Size;
}

const Template: Story<ArgTypes> = ({ name, size }: ArgTypes) => html`
  <ds-icon size=${size} name=${name}></ds-icon>
`;

export const Icon = Template.bind({});
