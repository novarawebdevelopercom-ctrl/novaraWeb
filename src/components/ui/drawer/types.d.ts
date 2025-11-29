import { PropsWithChildren, ReactNode } from 'react';
import { SizeVariant } from '@/components/ui/types';

export type DrawerProps = {
  opened: boolean;
  onClose: () => void;
  closeOnClickOutside?: boolean;
  closeOnEscape?: boolean;
  id?: string;
  keepMounted?: boolean;
  lockScroll?: boolean;
  offset?: string | number;
  padding?: SizeVariant;
  position?: 'top' | 'left' | 'bottom' | 'right';
  radius?: SizeVariant | number;
  returnFocus?: boolean;
  size?: number | SizeVariant | (string & {});
  title?: ReactNode;
  trapFocus?: boolean;
  withCloseButton?: boolean;
  withOverlay?: boolean;
  withinPortal?: boolean;
  zIndex?: string | number;
  closeButtonClassName?: string;
  className?: string;
} & PropsWithChildren;
