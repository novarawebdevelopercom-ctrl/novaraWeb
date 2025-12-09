'use client';

import * as React from 'react';
import { Loader, Button as MantineButton } from '@mantine/core';
import { ButtonProps } from './types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      
      label, // اضافه شد
      loading = false,
      startIcon = null,
      endIcon = null,
      color = 'primary',
      variant = 'filled',
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    return (
      <MantineButton
        ref={ref}
        loading={loading}
        leftSection={loading ? <Loader size="xs" color="currentColor" /> : startIcon}
        rightSection={endIcon}
        fullWidth={fullWidth}
        color={color}
        variant={variant}
        {...props}
      >
        {label } {/* اگر label بود استفاده شود، در غیر این صورت children */}
      </MantineButton>
    );
  }
);