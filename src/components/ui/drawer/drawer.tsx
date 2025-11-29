import React from 'react';
import { Drawer as D } from '@mantine/core';
import { DrawerProps } from './types';

export const Drawer: React.FC<DrawerProps> = ({ closeButtonClassName, ...props }) => {
  return <D {...props} closeButtonProps={{ className: closeButtonClassName }} />;
};
