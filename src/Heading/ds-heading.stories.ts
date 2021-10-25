import { html } from 'lit';
import { Story } from '../../stories/types';
import * as Types from '../types';
import './ds-heading';

export default {
  title: 'Components/Typograph/Heading',
  component: 'ds-heading',
  argTypes: {
    size: {
      table: { category: 'Appearance' },
      description: 'Defines the size of heading',
      control: { type: 'radio', options: Object.values(Types.Size) },
      defaultValue: Types.Size.Medium,
    },
    marginless: {
      table: { category: 'Appearance' },
      description: 'Defines if paragraph has margin',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    priority: {
      table: { category: 'Semantics' },
      description: 'Defines the semantic tag',
      control: {
        type: 'select',
        options: ['1', '2', '3', '4', '5', '6', 'span'],
      },
      defaultValue: Types.HeadingPriority.default,
    },
  },
};

interface ArgTypes {
  size: Types.Size;
  marginless: boolean;
  priority: Types.HeadingPriority;
}

const Template: Story<ArgTypes> = ({
  size,
  priority,
  marginless,
}: ArgTypes) => html`
  <div>
    <ds-heading size=${size} priority=${priority} ?marginless=${marginless}>
      Heading
    </ds-heading>

    <ds-paragraph size=${size}>
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.
    </ds-paragraph>
  </div>
`;

export const Heading = Template.bind({});
