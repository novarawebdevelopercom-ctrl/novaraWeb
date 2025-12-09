import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from './anchor';

const meta: Meta<typeof Anchor> = {
  title: 'UI/Anchor',
  component: Anchor,
  argTypes: {
    color: { control: "color" },
    variant: { control: "select", options: ["filled", "outline", "subtle"] },
    fullWidth: { control: "boolean" },
    startIcon: { control: "text" },
    endIcon: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Anchor>;

export const Basic: Story = {
  args: {
    href: '/',
    children: 'Default Anchor',
    color: 'blue',
    variant: 'subtle',
    fullWidth: false,
  },
};

export const WithIcons: Story = {
  args: {
    href: '#',
    label: 'Anchor with Icons',
    startIcon: '🔗',
    endIcon: '➡️',
  },
};
