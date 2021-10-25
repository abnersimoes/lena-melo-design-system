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
    marginless: {
      table: { category: 'Appearance' },
      description: 'Defines if paragraph has margin',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

interface ArgTypes {
  size: Types.Size;
  marginless: boolean;
}

const Template: Story<ArgTypes> = ({ size, marginless }: ArgTypes) => html`
  <div>
    <ds-paragraph size=${size} ?marginless=${marginless}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </ds-paragraph>

    <ds-paragraph size=${size} ?marginless=${marginless}>
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.
    </ds-paragraph>
  </div>
`;

export const Paragraph = Template.bind({});
