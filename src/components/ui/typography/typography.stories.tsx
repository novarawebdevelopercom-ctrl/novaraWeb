import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { TypographyProps } from './types';
import { Typography } from './typography';

const meta: Meta<typeof Typography> = {
  title: 'UI/Typography',
  component: Typography,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Tests: Story = {
  args: {
    children: 'Test Typography',
  },
  render: (args: TypographyProps) => <Typography {...args}>{args.children}</Typography>,
};

export const Paragraph: Story = {
  args: {
    as: 'p',
    children: 'This is a paragraph text',
  },
};

export const Heading1: Story = {
  args: {
    as: 'h1',
    children: 'This is a heading 1 text',
    size: 'xl',
  },
};

export const Heading2: Story = {
  args: {
    as: 'h2',
    children: 'This is a heading 2 text',
    size: 'lg',
  },
};

export const Heading3: Story = {
  args: {
    as: 'h3',
    children: 'This is a heading 3 text',
    size: 'md',
  },
};

export const Span: Story = {
  args: {
    as: 'span',
    children: 'This is an inline span text',
  },
};

export const Strong: Story = {
  args: {
    as: 'strong',
    children: 'This is strong/bold text',
  },
};

export const Italic: Story = {
  args: {
    style: 'italic',
    children: 'This is italic text',
  },
};

export const Underlined: Story = {
  args: {
    direction: 'underline',
    children: 'This is underlined text',
  },
};

export const Uppercase: Story = {
  args: {
    transform: 'uppercase',
    children: 'This is uppercase text',
  },
};

export const Colored: Story = {
  args: {
    color: 'blue',
    children: 'This is blue colored text',
  },
};

export const Truncated: Story = {
  render: () => (
    <div style={{ maxWidth: '40ch' }}>
      <Typography truncate="end">
        This is a very long text that will be truncated when it exceeds the container width
      </Typography>
    </div>
  ),
};

export const LineClamped: Story = {
  render: () => (
    <div style={{ maxWidth: '40ch' }}>
      <Typography lineClamp={2}>
        This is a longer paragraph that will be clamped to 2 lines. The rest of the text will be
        hidden and replaced with an ellipsis.
      </Typography>
    </div>
  ),
};

export const Centered: Story = {
  args: {
    align: 'center',
    children: 'This text is center aligned',
  },
};

export const CustomWeight: Story = {
  args: {
    weight: 800,
    children: 'This is extra bold text',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <Typography as="h1">Heading 1</Typography>
      <Typography as="h2">Heading 2</Typography>
      <Typography as="h3">Heading 3</Typography>
      <Typography as="h4">Heading 4</Typography>
      <Typography as="h5">Heading 5</Typography>
      <Typography as="h6">Heading 6</Typography>
      <Typography as="p">Regular paragraph text</Typography>
      <Typography as="span" color="blue">
        Inline blue text
      </Typography>
      <Typography as="strong">Strong text</Typography>
      <Typography style="italic">Italic text</Typography>
      <Typography direction="underline">Underlined text</Typography>
      <Typography transform="uppercase">Uppercase text</Typography>
      <Typography align="center">Centered text</Typography>
      <Typography weight={300}>Light weight text</Typography>
      <Typography weight={900}>Black weight text</Typography>
      <Typography truncate="end" className="max-w-xs">
        Truncated text that will be cut off with ellipsis when too long
      </Typography>
      <Typography lineClamp={2} className="max-w-xs">
        Line clamped text that will show only two lines. Additional text will be hidden and replaced
        with ellipsis at the end of the second line.
      </Typography>
    </div>
  ),
};
