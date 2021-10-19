import { html } from 'lit';
import { Story } from '../../../stories/types';
import * as Types from '../../types';
import buttonStories, { ButtonArgTypes } from '../ds-button.stories';
import './ds-button-icon';

export default {
  title: 'Components/Button/Button Icon',
  component: 'ds-button-icon',
  parameters: {
    docs: {
      description: {
        component:
          'Material Icon: https://fonts.google.com/icons?selected=Material+Icons',
      },
    },
  },
  argTypes: {
    ...buttonStories.argTypes,
    iconLeft: {
      table: { category: 'Semantics' },
      description: 'Defines the a icon for render into button',
      control: { type: 'select', options: Object.values(Types.IconName) },
      defaultValue: Types.IconName.Home,
    },
    iconRight: {
      table: { category: 'Semantics' },
      description: 'Defines the a icon for render into button',
      control: { type: 'select', options: Object.values(Types.IconName) },
      defaultValue: Types.IconName.None,
    },
  },
};

interface ArgTypes extends ButtonArgTypes {
  iconLeft: Types.IconName;
  iconRight: Types.IconName;
}

const Template: Story<ArgTypes> = ({
  onClick,
  size,
  raised,
  outline,
  disabled,
  label,
  iconLeft,
  iconRight,
}: ArgTypes) => html`
  <ds-button-icon
    @on-click=${onClick}
    size=${size}
    ?raised=${raised}
    ?outline=${outline}
    ?disabled=${disabled}
    iconLeft=${iconLeft}
    iconRight=${iconRight}
  >
    ${label}
  </ds-button-icon>
`;

export const ButtonIcon = Template.bind({});
