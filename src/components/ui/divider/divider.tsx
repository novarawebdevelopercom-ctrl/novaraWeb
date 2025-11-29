import React from 'react';
import { Divider as D } from '@mantine/core';
import { DividerProps } from './types';

export const Divider: React.FC<DividerProps> = (props) => {
  return <D {...props} />;
};
