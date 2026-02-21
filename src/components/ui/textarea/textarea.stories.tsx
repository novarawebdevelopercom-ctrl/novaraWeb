import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  args: {
    label: 'Message',
    placeholder: 'Write your message...',
    minRows: 4,
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    error: 'Message is required',
  },
};

export const Autosize: Story = {
  args: {
    label: 'Autosize textarea',
    autosize: true,
    minRows: 3,
    maxRows: 6,
  },
};
