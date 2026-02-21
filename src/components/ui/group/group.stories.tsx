import type { Meta, StoryObj } from '@storybook/react';
import { Group } from './group';
import { Button } from '../button/button';

const meta: Meta<typeof Group> = {
  title: 'UI/Group',
  component: Group,
};

export default meta;

type Story = StoryObj<typeof Group>;

export const Default: Story = {
  render: () => (
    <Group>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </Group>
  ),
};

export const Spaced: Story = {
  render: () => (
    <Group gap="xl">
      <Button>Wide 1</Button>
      <Button>Wide 2</Button>
    </Group>
  ),
};