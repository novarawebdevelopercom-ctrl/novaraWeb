import { PropsWithChildren } from 'react';
import { SizeVariant } from '@/components/ui/types';

export type CardProps = {
  size?: SizeVariant | number | (string & {});
  className?: string;
} & PropsWithChildren;
