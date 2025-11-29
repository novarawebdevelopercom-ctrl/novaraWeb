import React from 'react';
import { Container as C } from '@mantine/core';
import { ContainerProps } from './types';

export const Container: React.FC<ContainerProps> = (props) => {
  return <C {...props} />;
};
