import { PropsWithChildren } from 'react';
import { SizeVariant } from '@/components/ui/types';

export type ContainerProps = {
  fluid?: boolean;
  size?: SizeVariant | number | (string & {});
  className?: string;
} & PropsWithChildren;
