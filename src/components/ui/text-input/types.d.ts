import { ReactNode } from 'react';
import { TextInputProps as MantineTextInputProps } from '@mantine/core';

export interface TextInputProps extends MantineTextInputProps {
  label?: ReactNode;
  error?: ReactNode;
}
