import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './text-input';

const meta: Meta<typeof TextInput> = {
  title: 'UI/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {
  args: {
    label: 'Full name',
    placeholder: 'Enter your name',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Invalid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled input',
    disabled: true,
  },
};
