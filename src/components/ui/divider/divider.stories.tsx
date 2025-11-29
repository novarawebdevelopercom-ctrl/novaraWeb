import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './divider';

const meta: Meta<typeof Divider> = {
  title: 'UI/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Basic: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Divider Label',
    labelPosition: 'center',
  },
};

export const LabelPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 40 }}>
      <Divider label="Left Label" labelPosition="left" />
      <Divider label="Center Label" labelPosition="center" />
      <Divider label="Right Label" labelPosition="right" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 40 }}>
      <Divider size="xs" />
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size={4} />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Divider color="primary" label="primary" labelPosition="center" />
      <Divider color="success" label="success" labelPosition="center" />
      <Divider color="error" label="error" labelPosition="center" />
      <Divider color="warning" label="warning" labelPosition="center" />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: 100 }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};
