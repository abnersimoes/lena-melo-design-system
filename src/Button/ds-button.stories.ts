import { html } from 'lit';
import { Story } from '../../stories/types';
import * as Types from '../types';
import '../Icon/ds-icon';
import './ds-button';

export default {
  title: 'Components/Button/Button',
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
    raised: {
      table: { category: 'Appearance' },
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'Defines the button has a fill',
    },
    outline: {
      table: { category: 'Appearance' },
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Defines the button has a border',
    },
    disabled: {
      table: { category: 'Semantics' },
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Defines if the button is disabled',
    },
    label: {
      table: { category: 'Semantics' },
      control: { type: 'text' },
      defaultValue: 'Button Component',
      description: 'Defines the button label',
    },
  },
};

export interface ButtonArgTypes {
  onClick: Function;
  size: Types.Size;
  raised: boolean;
  outline: boolean;
  disabled: boolean;
  label: string;
}

const Template: Story<ButtonArgTypes> = ({
  onClick,
  size,
  raised,
  outline,
  disabled,
  label,
}: ButtonArgTypes) => html`
  <ds-button
    @on-click=${onClick}
    size=${size}
    ?raised=${raised}
    ?outline=${outline}
    ?disabled=${disabled}
  >
    ${label}
  </ds-button>
`;

const TemplateWithIcons: Story<ButtonArgTypes> = ({
  onClick,
  size,
  raised,
  outline,
  disabled,
  label,
}: ButtonArgTypes) => html`
  <ds-button
    @on-click=${onClick}
    size=${size}
    ?raised=${raised}
    ?outline=${outline}
    ?disabled=${disabled}
  >
    <ds-icon slot="icon-left" name="navigate_before" size=${size}></ds-icon>
    ${label}
    <ds-icon slot="icon-right" name="navigate_next" size=${size}></ds-icon>
  </ds-button>
`;

export const Button = Template.bind({});

export const ButtonWithIcons = TemplateWithIcons.bind({});
