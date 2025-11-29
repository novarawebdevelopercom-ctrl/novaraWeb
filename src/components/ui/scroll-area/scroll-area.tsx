import React from 'react';
import { ScrollArea as D } from '@mantine/core';
import { ScrollAreaProps } from './types';

export const ScrollArea: React.FC<ScrollAreaProps> = (props) => {
  return <D {...props} />;
};
