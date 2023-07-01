import type { Meta, StoryObj } from '@storybook/react';
import InputRichText from '../modules/input-rich-text';

const meta = {
  title: 'Example/ReactInputRichText',
  component: InputRichText,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof InputRichText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputRichTextComponent: Story = {
  args: {},
};
