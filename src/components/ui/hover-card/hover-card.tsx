import React from 'react';
import { HoverCard as HC } from '@mantine/core';
import { HoverCardDropdownProps, HoverCardProps, HoverCardTargetProps } from './types';

export const HoverCard: React.FC<HoverCardProps> = (props) => {
  return <HC {...props} />;
};
export const HoverCardTarget: React.FC<HoverCardTargetProps> = (props) => {
  return <HC.Target {...props} />;
};
export const HoverCardDropdown: React.FC<HoverCardDropdownProps> = (props) => {
  return <HC.Dropdown {...props} />;
};
