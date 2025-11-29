import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MoonIcon } from '@/components/shared/icons';
import { ActionIcon } from './action-icon';

const meta: Meta<typeof ActionIcon> = {
  title: 'UI/ActionIcon',
  component: ActionIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ActionIcon>;

export const Basic: Story = {
  args: {
    size: 'md',
    variant: 'filled',
    radius: 'md',
    children: <MoonIcon fontSize={16} />,
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ActionIcon variant="filled">
        <MoonIcon fontSize={16} />
      </ActionIcon>
      <ActionIcon variant="light">
        <MoonIcon fontSize={16} />
      </ActionIcon>
      <ActionIcon variant="outline">
        <MoonIcon fontSize={16} />
      </ActionIcon>
      <ActionIcon variant="default">
        <MoonIcon fontSize={16} />
      </ActionIcon>
      <ActionIcon variant="white">
        <MoonIcon fontSize={16} />
      </ActionIcon>
      <ActionIcon variant="transparent">
        <MoonIcon fontSize={16} />
      </ActionIcon>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <ActionIcon size="lg" color="primary">
        <MoonIcon fontSize={18} />
      </ActionIcon>
      <ActionIcon size="lg" color="success">
        <MoonIcon fontSize={18} />
      </ActionIcon>
      <ActionIcon size="lg" color="warning">
        <MoonIcon fontSize={18} />
      </ActionIcon>
      <ActionIcon size="lg" color="error">
        <MoonIcon fontSize={18} />
      </ActionIcon>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <ActionIcon size="xs">
        <MoonIcon fontSize={12} />
      </ActionIcon>
      <ActionIcon size="sm">
        <MoonIcon fontSize={14} />
      </ActionIcon>
      <ActionIcon size="md">
        <MoonIcon fontSize={16} />
      </ActionIcon>
      <ActionIcon size="lg">
        <MoonIcon fontSize={18} />
      </ActionIcon>
      <ActionIcon size="xl">
        <MoonIcon fontSize={20} />
      </ActionIcon>
    </div>
  ),
};

export const Radiuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <ActionIcon radius="xs">
        <MoonIcon fontSize={16} />
      </ActionIcon>
      <ActionIcon radius="sm">
        <MoonIcon fontSize={16} />
      </ActionIcon>
      <ActionIcon radius="md">
        <MoonIcon fontSize={16} />
      </ActionIcon>
      <ActionIcon radius="lg">
        <MoonIcon fontSize={16} />
      </ActionIcon>
      <ActionIcon radius="xl">
        <MoonIcon fontSize={16} />
      </ActionIcon>
    </div>
  ),
};
