import { ReactNode } from 'react';
import { SelectProps as MantineSelectProps } from '@mantine/core';

export interface SelectProps extends MantineSelectProps {
  label?: ReactNode;
  error?: ReactNode;
}
