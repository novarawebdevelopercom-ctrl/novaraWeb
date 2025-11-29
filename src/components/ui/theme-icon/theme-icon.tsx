import React from 'react';
import { ThemeIcon as TI } from '@mantine/core';
import { ThemeIconProps } from './types';

export const ThemeIcon: React.FC<ThemeIconProps> = (props) => {
  return <TI {...props} />;
};
