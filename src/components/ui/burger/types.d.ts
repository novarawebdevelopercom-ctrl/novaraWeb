import { CSSProperties, PropsWithChildren } from 'react';
import { ColorVariant, SizeVariant } from '@/components/ui/types';

export type BurgerProps = {
  onClick: () => void;
  color?: ColorVariant;
  lineSize?: string | number;
  opened?: boolean;
  size?: SizeVariant | number | (string & {});
  transitionDuration?: number;
  transitionTimingFunction?: CSSProperties['transitionTimingFunction'];
  className?: string;
} & PropsWithChildren;
