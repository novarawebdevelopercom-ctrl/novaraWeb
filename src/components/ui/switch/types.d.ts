import { ChangeEvent, PropsWithChildren, ReactNode } from 'react';
import { ColorVariant, RadiusVarint, SizeVariant } from '@/components/ui/types';

export type SwitchProps = {
  color?: ColorVariant;
  label?: ReactNode;
  labelPosition?: 'left' | 'right';
  offLabel?: ReactNode;
  onLabel?: ReactNode;
  radius?: RadiusVarint;
  thumbIcon?: ReactNode;
  size?: SizeVariant;
  disabled?: boolean;
  error?: ReactNode;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
} & PropsWithChildren;
