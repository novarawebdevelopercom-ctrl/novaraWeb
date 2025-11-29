import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeIcon } from './theme-icon';

const meta: Meta<typeof ThemeIcon> = {
  title: 'UI/ThemeIcon',
  component: ThemeIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeIcon>;

export const Basic: Story = {
  args: {
    size: 'sm',
    children: 'I',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ThemeIcon size="xl" variant="filled">
        F
      </ThemeIcon>
      <ThemeIcon size="xl" variant="outline">
        O
      </ThemeIcon>
      <ThemeIcon size="xl" variant="light">
        L
      </ThemeIcon>
      <ThemeIcon size="xl" variant="default">
        D
      </ThemeIcon>
      <ThemeIcon size="xl" variant="white">
        W
      </ThemeIcon>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ThemeIcon size="xl" color="primary">
        P
      </ThemeIcon>
      <ThemeIcon size="xl" color="success">
        S
      </ThemeIcon>
      <ThemeIcon size="xl" color="error">
        E
      </ThemeIcon>
      <ThemeIcon size="xl" color="warning">
        W
      </ThemeIcon>
      <ThemeIcon size="xl" color="info">
        I
      </ThemeIcon>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <ThemeIcon size="xs">E</ThemeIcon>
      <ThemeIcon size="sm">S</ThemeIcon>
      <ThemeIcon size="md">M</ThemeIcon>
      <ThemeIcon size="lg">L</ThemeIcon>
      <ThemeIcon size="xl">E</ThemeIcon>
    </div>
  ),
};

export const Radius: Story = {
  args: {
    size: 'xl',
    radius: 'xl',
    children: 'R',
  },
};

export const AutoContrast: Story = {
  args: {
    size: 'xl',
    autoContrast: true,
    children: 'A',
  },
};

export const WithChildren: Story = {
  render: () => (
    <ThemeIcon size="xl">
      <span>C</span>
    </ThemeIcon>
  ),
};
