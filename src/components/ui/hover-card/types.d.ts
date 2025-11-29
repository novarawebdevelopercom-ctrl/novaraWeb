import { PropsWithChildren, ReactNode } from 'react';

export type HoverCardProps = { className?: string; withinPortal?: boolean } & PropsWithChildren;
export type HoverCardTargetProps = { className?: string; children: ReactNode };
export type HoverCardDropdownProps = { className?: string } & PropsWithChildren;
