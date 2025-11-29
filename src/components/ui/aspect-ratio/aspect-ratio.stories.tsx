import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from './aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

const style = { backgroundColor: 'lightgray', padding: 20 };

export const Basic: Story = {
  args: {
    ratio: 16 / 9,
    children: <div style={style}>Content with aspect ratio</div>,
  },
};

export const Square: Story = {
  args: {
    ratio: 1 / 1,
    children: <div style={style}>Square aspect ratio</div>,
  },
};

export const Widescreen: Story = {
  args: {
    ratio: 21 / 9,
    children: <div style={style}>Widescreen aspect ratio</div>,
  },
};
