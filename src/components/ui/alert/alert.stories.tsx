import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Alert } from './alert';
import { IconCircleCheck, IconAlertTriangle } from '@tabler/icons-react';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    uiType: 'success',
    title: 'Request Sent',
    icon: <IconCircleCheck size={18} />,
    children: 'Your request has been submitted successfully.',
  },
};

export const Error: Story = {
  args: {
    uiType: 'error',
    title: 'Error',
    icon: <IconAlertTriangle size={18} />,
    children: 'Something went wrong.',
  },
};