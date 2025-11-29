import React from 'react';
import { Burger as B } from '@mantine/core';
import { BurgerProps } from './types';

export const Burger: React.FC<BurgerProps> = (props) => {
  return <B {...props} />;
};
