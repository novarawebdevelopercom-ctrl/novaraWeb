import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui';
import { Drawer } from './drawer';

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Basic Drawer"
          padding="md"
          size="md"
        >
          <p>This is the content of the drawer.</p>
        </Drawer>
      </>
    );
  },
};

export const Positions: Story = {
  render: () => {
    const [opened, setOpened] = useState<'top' | 'left' | 'bottom' | 'right' | null>(null);

    return (
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {(['top', 'left', 'bottom', 'right'] as const).map((pos) => (
          <Button key={pos} onClick={() => setOpened(pos)}>
            Open {pos} Drawer
          </Button>
        ))}
        {opened && (
          <Drawer
            opened
            onClose={() => setOpened(null)}
            title={`Drawer from ${opened}`}
            position={opened}
            padding="md"
            size="md"
          >
            <p>This drawer slides in from the {opened}.</p>
          </Drawer>
        )}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Open XL Drawer</Button>
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="XL Drawer"
          padding="md"
          size="xl"
        >
          <p>This drawer is extra large.</p>
        </Drawer>
      </>
    );
  },
};

export const WithCustomCloseButton: Story = {
  render: () => {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Button onClick={() => setOpened(true)}>Open Drawer with Styled Close Button</Button>
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Custom Close Button"
          padding="md"
          size="md"
          closeButtonClassName="custom-close-btn"
        >
          <p>This drawer has a custom styled close button.</p>
        </Drawer>
      </>
    );
  },
};
