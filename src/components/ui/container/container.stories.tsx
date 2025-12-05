import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './container';

const meta: Meta<typeof Container> = {
  title: 'UI/Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

const style = { backgroundColor: 'lightgray', padding: 20 };

export const Basic: Story = {
  args: {
    children: <div style={style}>Basic container</div>,
  },
};

export const Fluid: Story = {
  args: {
    fluid: true,
    children: <div style={style}>Fluid container</div>,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Container size="xs">
        <div style={style}>Extra Small</div>
      </Container>
      <Container size="sm">
        <div style={style}>Small</div>
      </Container>
      <Container size="md">
        <div style={style}>Medium</div>
      </Container>
      <Container size="lg">
        <div style={style}>Large</div>
      </Container>
      <Container size="xl">
        <div style={style}>Extra Large</div>
      </Container>
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    size: 300,
    children: <div style={style}>Custom size (300px)</div>,
  },
};

export const NestedContainers: Story = {
  render: () => (
    <Container fluid>
      <Container size="sm">
        <div style={style}>Nested small container</div>
      </Container>
      <Container size="lg">
        <div style={style}>Nested large container</div>
      </Container>
    </Container>
  ),
};
