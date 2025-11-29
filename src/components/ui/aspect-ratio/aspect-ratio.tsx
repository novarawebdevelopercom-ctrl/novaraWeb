import React from 'react';
import { AspectRatio as AR } from '@mantine/core';
import { AspectRaioProps } from './types';

export const AspectRatio: React.FC<AspectRaioProps> = (props) => {
  return <AR {...props} />;
};
