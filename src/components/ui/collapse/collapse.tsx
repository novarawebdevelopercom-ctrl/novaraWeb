import React from 'react';
import { Collapse as C } from '@mantine/core';
import { CollapseProps } from './types';

export const Collapse: React.FC<CollapseProps> = (props) => {
  return <C {...props} />;
};
