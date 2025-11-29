import { PropsWithChildren } from 'react';
import { ColorVariant, RadiusVarint, SizeVariant, Variants } from '@/components/ui/types';

export type ThemeIconProps = {
  variant?: Variants;
  autoContrast?: boolean;
  color?: ColorVariant;
  radius?: RadiusVarint;
  size: SizeVariant | number | (string & {});
  className?: string;
} & PropsWithChildren;
