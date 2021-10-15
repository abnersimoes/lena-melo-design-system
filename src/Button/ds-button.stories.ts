import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Story } from '../../stories/types';
import * as Types from '../types';
import './ds-button';

export default {
  title: 'Components/Button',
  component: 'ds-button',
  argTypes: {
    onClick: {
      table: { category: 'Events' },
      name: '@on-click',
      type: { required: false },
      control: { disable: true },
      action: '@on-click',
      description: 'Defines the callback function',
    },
    size: {
      table: { category: 'Appearance' },
      control: { type: 'radio' },
      options: Object.values(Types.Size),
      defaultValue: Types.Size.Medium,
      description: 'Defines the size of the button',
    },
    outline: {
      table: { category: 'Appearance' },
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Defines the button has a border or a fill',
    },
  },
};

interface ArgTypes {
  size?: Types.Size;
  outline: boolean;
  onClick: Function;
}

const Template: Story<ArgTypes> = ({
  size,
  outline,
  onClick,
}: ArgTypes) => html`
  <ds-button @on-click=${onClick} size=${ifDefined(size)} ?outline=${outline}
    >Button</ds-button
  >
`;

export const Paragraph = Template.bind({});
Paragraph.args = {
  size: Types.Size.Medium,
};
