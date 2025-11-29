import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Burger } from './burger';

const meta: Meta<typeof Burger> = {
  title: 'UI/Burger',
  component: Burger,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Burger>;

export const Basic: Story = {
  args: {
    opened: false,
    size: 'xl',
    color: 'black',
    onClick: () => {},
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Burger size="xl" color="primary" opened={false} onClick={() => {}} />
      <Burger size="xl" color="success" opened={false} onClick={() => {}} />
      <Burger size="xl" color="error" opened={false} onClick={() => {}} />
      <Burger size="xl" color="warning" opened={false} onClick={() => {}} />
      <Burger size="xl" color="info" opened={false} onClick={() => {}} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Burger size="xs" opened={false} onClick={() => {}} />
      <Burger size="sm" opened={false} onClick={() => {}} />
      <Burger size="md" opened={false} onClick={() => {}} />
      <Burger size="lg" opened={false} onClick={() => {}} />
      <Burger size="xl" opened={false} onClick={() => {}} />
    </div>
  ),
};

export const Opened: Story = {
  args: {
    opened: true,
    color: 'black',
    size: 'xl',
    onClick: () => {},
  },
};

export const Closed: Story = {
  args: {
    opened: false,
    color: 'black',
    size: 'xl',
    onClick: () => {},
  },
};

export const CustomLineSize: Story = {
  args: {
    size: 'xl',
    color: 'black',
    lineSize: 10,
    opened: false,
    onClick: () => {},
  },
};
