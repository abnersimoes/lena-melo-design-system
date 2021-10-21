import { html } from 'lit';
import { Story } from '../../stories/types';
import '../../stories/DemoContent/index';
import * as Types from '../types';
import './ds-container';

export default {
  title: 'Components/Container',
  component: 'ds-container',
};

interface ArgTypes {
  size: Types.Size;
}

const Template: Story<ArgTypes> = () => html`
  <ds-container>
    <demo-content> demo-content </demo-content>
  </ds-container>
`;

export const Container = Template.bind({});
