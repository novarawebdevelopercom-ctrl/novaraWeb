'use client';

import * as React from 'react';
import { Select as MantineSelect } from '@mantine/core';
import { SelectProps } from './types';

export const Select = React.forwardRef<
  HTMLInputElement,
  SelectProps
>(({ label, error, ...props }, ref) => {
  return (
    <MantineSelect
      ref={ref}
      label={label}
      error={error}
      {...props}
    />
  );
});

Select.displayName = 'Select';
