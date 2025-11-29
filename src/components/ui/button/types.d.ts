import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ColorVariant, SizeVariant, Variants } from '@/components/ui/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: SizeVariant;
  startIcon?: ReactNode | null;
  endIcon?: ReactNode | null;
  color?: ColorVariant;
  variant?: Variants;
  fullWidth?: boolean;
}
