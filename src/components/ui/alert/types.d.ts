import type { AlertProps as MantineAlertProps } from '@mantine/core';

export type UiAlertType = 'success' | 'error';

export interface UiAlertProps extends MantineAlertProps {
  uiType?: UiAlertType;
}