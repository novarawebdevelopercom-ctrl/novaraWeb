import React from 'react';
import { ActionIcon as AI } from '@mantine/core';
import { ActionIconProps } from './types';

export const ActionIcon: React.FC<ActionIconProps> = (props) => {
  return <AI {...props} />;
};
