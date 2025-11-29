import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui';
import { Collapse } from './collapse';

const meta: Meta<typeof Collapse> = {
  title: 'UI/Collapse',
  component: Collapse,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Basic: Story = {
  render: () => {
    const [opened, setOpened] = useState(true);

    return (
      <div>
        <Button onClick={() => setOpened((p) => !p)}>{opened ? 'Collapse' : 'Expand'}</Button>
        <Collapse in={opened}>
          <div style={{ backgroundColor: '#f3f4f6', padding: 16, borderRadius: 8 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nihil debitis ex
            distinctio consequatur? Consectetur ad quis facilis assumenda animi.
          </div>
        </Collapse>
      </div>
    );
  },
};

export const WithAnimation: Story = {
  render: () => {
    const [opened, setOpened] = useState(true);

    return (
      <div>
        <Button onClick={() => setOpened((p) => !p)}>{opened ? 'Collapse' : 'Expand'}</Button>
        <Collapse in={opened} animateOpacity transitionDuration={500}>
          <div style={{ backgroundColor: '#e0f7fa', padding: 16, borderRadius: 8 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nihil debitis ex
            distinctio consequatur? Consectetur ad quis facilis assumenda animi.
          </div>
        </Collapse>
      </div>
    );
  },
};

export const CustomTiming: Story = {
  render: () => {
    const [opened, setOpened] = useState(true);

    return (
      <div>
        <Button onClick={() => setOpened((p) => !p)}>{opened ? 'Collapse' : 'Expand'}</Button>
        <Collapse in={opened} transitionTimingFunction="ease-in-out">
          <div style={{ backgroundColor: '#e8f5e9', padding: 16, borderRadius: 8 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nihil debitis ex
            distinctio consequatur? Consectetur ad quis facilis assumenda animi.
          </div>
        </Collapse>
      </div>
    );
  },
};
