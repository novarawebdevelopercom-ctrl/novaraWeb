import { PropsWithChildren } from 'react';
import { ColorVariant, RadiusVarint, SizeVariant, Variants } from '@/components/ui/types';

export type ActionIconProps = {
  onClick?: () => void;
  variant?: Variants;
  size?: SizeVariant;
  radius?: RadiusVarint;
  color?: ColorVariant;
  className?: string;
} & PropsWithChildren;
