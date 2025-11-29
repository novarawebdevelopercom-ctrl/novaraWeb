import { PropsWithChildren, ReactNode } from 'react';
import { ColorVariant } from '@/components/ui/types';

export type MenuProps = { className?: string } & PropsWithChildren;
export type MenuTargetProps = { className?: string; children: ReactNode };
export type MenuDropdownProps = { className?: string } & PropsWithChildren;
export type MenuLabelProps = { className?: string } & PropsWithChildren;
export type MenuItemProps = {
  onClick?: () => void;
  className?: string;
  color?: ColorVariant;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
} & PropsWithChildren;
