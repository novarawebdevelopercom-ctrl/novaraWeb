import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui';
import { HoverCard, HoverCardDropdown, HoverCardTarget } from './hover-card';

const meta: Meta<typeof HoverCard> = {
  title: 'UI/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Basic: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTarget>
        <Button>Hover me</Button>
      </HoverCardTarget>
      <HoverCardDropdown>
        <div style={{ padding: 12 }}>This is a hover card dropdown.</div>
      </HoverCardDropdown>
    </HoverCard>
  ),
};

export const WithPortal: Story = {
  render: () => (
    <HoverCard withinPortal>
      <HoverCardTarget>
        <Button>Hover with Portal</Button>
      </HoverCardTarget>
      <HoverCardDropdown>
        <div style={{ padding: 12 }}>This hover card renders in a portal.</div>
      </HoverCardDropdown>
    </HoverCard>
  ),
};
