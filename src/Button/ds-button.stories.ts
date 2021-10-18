import { html } from 'lit';
import { Story } from '../../stories/types';
import * as Types from '../types';
import './ds-button';

export default {
  title: 'Components/Button',
  component: 'ds-button',
  parameters: {
    docs: {
      description: {
        component:
          'Material Icon: https://fonts.google.com/icons?selected=Material+Icons',
      },
    },
  },
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
    disabled: {
      table: { category: 'Semantics' },
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Defines if the button is disabled',
    },
    icon: {
      table: { category: 'Semantics' },
      description: 'Defines the a icon for render into button',
      control: { type: 'select', options: Object.values(Types.IconName) },
      defaultValue: undefined,
    },
    iconRight: {
      table: { category: 'Semantics' },
      description: 'Defines the icon position',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    label: {
      table: { category: 'Semantics' },
      control: { type: 'text' },
      defaultValue: 'Button Component',
      description: 'Defines the button label',
    },
  },
};

interface ArgTypes {
  onClick: Function;
  size: Types.Size;
  outline: boolean;
  disabled: boolean;
  label: string;
  icon: Types.IconName;
  iconRight: boolean;
}

const Template: Story<ArgTypes> = ({
  onClick,
  size,
  outline,
  disabled,
  label,
  icon,
  iconRight,
}: ArgTypes) => html`
  <ds-button
    @on-click=${onClick}
    size=${size}
    icon=${icon}
    ?iconRight=${iconRight}
    ?outline=${outline}
    ?disabled=${disabled}
  >
    ${label}
  </ds-button>
`;

export const Button = Template.bind({});
