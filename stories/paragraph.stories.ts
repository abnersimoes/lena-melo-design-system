import { html, TemplateResult } from 'lit';
import '../src/Paragraph/ds-paragraph';

export default {
  title: 'Paragraph',
  component: 'ds-paragraph',
  // argTypes: {
  //   title: { control: 'text' },
  //   counter: { control: 'number' },
  //   textColor: { control: 'color' },
  // },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  counter?: number;
  textColor?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({ slot }: ArgTypes) => html`
  <ds-paragraph>${slot}</ds-paragraph>
`;

// export const Regular = Template.bind({});

// export const CustomTitle = Template.bind({});
// CustomTitle.args = {
//   title: 'My title',
// };

// export const CustomCounter = Template.bind({});
// CustomCounter.args = {
//   counter: 123456,
// };

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`Slotted Paragraph`,
};
// SlottedContent.argTypes = {
//   slot: { table: { disable: true } },
// };
