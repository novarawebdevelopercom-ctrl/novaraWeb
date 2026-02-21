'use client';

import * as React from 'react';
import { TextInput as MantineTextInput } from '@mantine/core';
import { TextInputProps } from './types';

export const TextInput = React.forwardRef<
  HTMLInputElement,
  TextInputProps
>(({ label, error, ...props }, ref) => {
  return (
    <MantineTextInput
      ref={ref}
      label={label}
      error={error}
      {...props}
    />
  );
});

TextInput.displayName = 'TextInput';
