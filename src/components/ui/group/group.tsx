import React from 'react';
import { Group as MantineGroup } from '@mantine/core';
import { UiGroupProps } from './types';

export const Group: React.FC<UiGroupProps> = ({
  gap = 'md',
  align = 'center',
  ...props
}) => {
  return (
    <MantineGroup
      gap={gap}
      align={align}
      {...props}
    />
  );
};