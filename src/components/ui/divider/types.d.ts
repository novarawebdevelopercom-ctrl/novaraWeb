import { PropsWithChildren, ReactNode } from 'react';
import { ColorVariant, SizeVariant } from '@/components/ui/types';

export type DividerProps = {
  color?: ColorVariant;
  label?: ReactNode;
  labelPosition?: 'center' | 'left' | 'right';
  orientation?: 'horizontal' | 'vertical';
  size?: SizeVariant | number | (string & {});
  className?: string;
} & PropsWithChildren;
