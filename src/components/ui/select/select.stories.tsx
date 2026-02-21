import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  args: {
    label: 'Project type',
    placeholder: 'Select project type',
    data: [
      { value: 'frontend', label: 'Frontend' },
      { value: 'backend', label: 'Backend' },
      { value: 'fullstack', label: 'Fullstack' },
    ],
  },
};

export const WithError: Story = {
  args: {
    label: 'Project type',
    error: 'Please select a value',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled select',
    disabled: true,
  },
};
