import { html } from 'lit';
import { Story } from '../../stories/types';
import * as Types from '../types';
import './ds-paragraph';

export default {
  title: 'Components/Typograph/Paragraph',
  component: 'ds-paragraph',
  argTypes: {
    size: {
      table: { category: 'Appearance' },
      description: 'Defines the size of paragraph',
      control: { type: 'radio', options: Object.values(Types.Size) },
      defaultValue: Types.Size.Medium,
    },
  },
};

interface ArgTypes {
  size: Types.Size;
}

const Template: Story<ArgTypes> = ({ size }: ArgTypes) => html`
  <ds-paragraph size=${size}>Paragraph</ds-paragraph>
`;

export const Paragraph = Template.bind({});
