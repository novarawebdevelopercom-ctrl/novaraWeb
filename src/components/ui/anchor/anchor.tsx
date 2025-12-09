'use client';


import * as React from 'react';

import { Anchor as MantineAnchor } from '@mantine/core';
import { AnchorProps } from './types';

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children,
     label,
     href,
     color = 'primary',
     variant = 'subtle',
     fullWidth = false,
     startIcon = null,
     endIcon = null,
     ...props }, ref
    ) => {
    return (
      <MantineAnchor ref={ref} 
      component="a"
      href={href}
        color={color}
        variant={variant}
        style={{ display: fullWidth ? 'flex' : 'inline-flex', alignItems: 'center', justifyContent: fullWidth ? 'space-between' : undefined}}
      {...props}>
        {startIcon && <span style={{ marginRight: 8 }}>{startIcon}</span>}
        {label ?? children} 
        {/* اگر label بود استفاده شود، در غیر این صورت children */}
        {endIcon && <span style={{ marginLeft: 8 }}>{endIcon}</span>}
      </MantineAnchor>
    );
  }
);
Anchor.displayName = 'Anchor';

export default Anchor;
