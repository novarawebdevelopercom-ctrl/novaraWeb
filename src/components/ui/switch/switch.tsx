import React from 'react';
import { Switch as S } from '@mantine/core';
import { SwitchProps } from './types';

export const Switch: React.FC<SwitchProps> = (props) => {
  return <S {...props} />;
};
