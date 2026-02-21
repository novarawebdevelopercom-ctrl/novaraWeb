'use client';

import React from 'react';
import { Textarea as MantineTextarea } from '@mantine/core';
import type { TextareaProps as MantineTextareaProps } from '@mantine/core';

export type TextareaProps = MantineTextareaProps;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return <MantineTextarea ref={ref} {...props} />;
  }
);

Textarea.displayName = 'Textarea';