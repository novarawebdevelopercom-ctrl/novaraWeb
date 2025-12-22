import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: SizeVariant;
  startIcon?: ReactNode | null;
  endIcon?: ReactNode | null;
  color?: ColorVariant;
  variant?: Variants;
  fullWidth?: boolean;
  label?: ReactNode; // اضافه کردن label
  href?: string;
  radius?: string; 

  
  children?:ReactNode;

}