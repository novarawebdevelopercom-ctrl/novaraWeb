import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

const style = { backgroundColor: 'lightgray', padding: 20 };

export const Basic: Story = {
  args: {
    children: <div style={style}>Basic Card</div>,
  },
};



export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Card size="xs">
        <div style={style}>Extra Small</div>
      </Card>
      <Card size="sm">
        <div style={style}>Small</div>
      </Card>
      <Card size="md">
        <div style={style}>Medium</div>
      </Card>
      <Card size="lg">
        <div style={style}>Large</div>
      </Card>
      <Card size="xl">
        <div style={style}>Extra Large</div>
      </Card>
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    size: 300,
    children: <div style={style}>Custom size (300px)</div>,
  },
};

export const NestedCards: Story = {
  render: () => (
    <Card>
      <Card size="sm">
        <div style={style}>Nested small Card</div>
      </Card>
      <Card size="lg">
        <div style={style}>Nested large Card</div>
      </Card>
    </Card>
  ),
};
