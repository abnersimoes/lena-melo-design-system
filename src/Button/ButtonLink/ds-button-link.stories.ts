import { html } from 'lit';
import { Story } from '../../../stories/types';
import * as Types from '../../types';
import '../../Icon/ds-icon';
import './ds-button-link';

export default {
  title: 'Components/Button/Button Link',
  component: 'ds-button-link',
  argTypes: {
    to: {
      table: { category: 'Semantics' },
      control: { type: 'text' },
      defaultValue: '#',
      description: 'Defines the href of link button',
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
    label: {
      table: { category: 'Semantics' },
      control: { type: 'text' },
      defaultValue: 'Button Component',
      description: 'Defines the button label',
    },
  },
};

interface ArgTypes {
  to: string;
  size: Types.Size;
  raised: boolean;
  outline: boolean;
  label: string;
}

const Template: Story<ArgTypes> = ({
  to,
  size,
  raised,
  outline,
  label,
}: ArgTypes) => html`
  <ds-button-link to=${to} size=${size} ?raised=${raised} ?outline=${outline}>
    ${label}
  </ds-button-link>
`;

const TemplateWithIcons: Story<ArgTypes> = ({
  to,
  size,
  raised,
  outline,
  label,
}: ArgTypes) => html`
  <ds-button-link to=${to} size=${size} ?raised=${raised} ?outline=${outline}>
    <ds-icon slot="icon-left" name="navigate_before" size=${size}></ds-icon>
    ${label}
    <ds-icon slot="icon-right" name="navigate_next" size=${size}></ds-icon>
  </ds-button-link>
`;

export const ButtonLink = Template.bind({});

export const ButtonLinkWithIcons = TemplateWithIcons.bind({});
