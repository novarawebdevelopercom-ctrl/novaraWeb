import { CSSProperties, PropsWithChildren } from 'react';

export type CollapseProps = {
  in: boolean;
  animateOpacity?: boolean;
  transitionDuration?: number;
  transitionTimingFunction?: CSSProperties['transitionTimingFunction'];
  className?: string;
} & PropsWithChildren;
