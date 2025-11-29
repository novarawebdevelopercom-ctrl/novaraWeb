import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MoonIcon, SunIcon } from '@/components/shared/icons';
import { Button } from '@/components/ui';
import { Menu, MenuDropdown, MenuItem, MenuLabel, MenuTarget } from './menu';

const meta: Meta<typeof Menu> = {
  title: 'UI/Menu',
  component: Menu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  render: () => (
    <Menu>
      <MenuTarget>
        <Button>Open Menu</Button>
      </MenuTarget>
      <MenuDropdown>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuDropdown>
    </Menu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Menu>
      <MenuTarget>
        <Button>Menu with Icons</Button>
      </MenuTarget>
      <MenuDropdown>
        <MenuItem leftSection={<SunIcon fontSize={16} />}>Settings</MenuItem>
        <MenuItem leftSection={<MoonIcon fontSize={16} />}>Logout</MenuItem>
      </MenuDropdown>
    </Menu>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Menu>
      <MenuTarget>
        <Button>Menu with Label</Button>
      </MenuTarget>
      <MenuDropdown>
        <MenuLabel>Manage</MenuLabel>
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Analytics</MenuItem>
        <MenuLabel>Account</MenuLabel>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuDropdown>
    </Menu>
  ),
};

export const ColoredItems: Story = {
  render: () => (
    <Menu>
      <MenuTarget>
        <Button>Colored Items</Button>
      </MenuTarget>
      <MenuDropdown>
        <MenuItem color="primary">Primary</MenuItem>
        <MenuItem color="error">Error</MenuItem>
        <MenuItem color="success">Success</MenuItem>
        <MenuItem color="warning">Warning</MenuItem>
      </MenuDropdown>
    </Menu>
  ),
};
