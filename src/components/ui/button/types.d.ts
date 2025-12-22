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
<<<<<<< HEAD
  
=======
  children?:ReactNode;
>>>>>>> f9ab4d4bfa5bf74bd9b090d719a4410e2f09b666
}