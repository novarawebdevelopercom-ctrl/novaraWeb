import React from 'react';
import { Menu as M } from '@mantine/core';
import {
  MenuDropdownProps,
  MenuItemProps,
  MenuLabelProps,
  MenuProps,
  MenuTargetProps,
} from './types';

export const Menu: React.FC<MenuProps> = (props) => {
  return <M {...props} />;
};
export const MenuTarget: React.FC<MenuTargetProps> = (props) => {
  return <M.Target {...props} />;
};
export const MenuDropdown: React.FC<MenuDropdownProps> = (props) => {
  return <M.Dropdown {...props} />;
};
export const MenuLabel: React.FC<MenuLabelProps> = (props) => {
  return <M.Label {...props} />;
};
export const MenuItem: React.FC<MenuItemProps> = (props) => {
  return <M.Item {...props} />;
 

};
