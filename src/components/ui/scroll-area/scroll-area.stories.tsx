import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './scroll-area';

const meta: Meta<typeof ScrollArea> = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Basic: Story = {
  render: () => (
    <div style={{ height: 200, width: 300 }}>
      <ScrollArea className="p-4">
        <div style={{ height: 600, width: '100%' }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
            imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
            porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
          </p>
        </div>
      </ScrollArea>
    </div>
  ),
};
