'use client';

import * as React from 'react';
import { Loader, Button as MantineButton } from '@mantine/core';
import { ButtonProps } from './types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
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
        {children}
      </MantineButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
