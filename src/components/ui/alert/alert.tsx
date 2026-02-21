import React from 'react';
import { Alert as MantineAlert } from '@mantine/core';
import type { UiAlertProps } from './types';
import styles from './alert.module.css';

export const Alert: React.FC<UiAlertProps> = ({
  uiType = 'success',
  classNames,
  ...props
}) => {
  return (
    <MantineAlert
      variant="unstyled"
      classNames={{
        root: `${styles.root} ${
          uiType === 'error' ? styles.error : styles.success
        }`,
        title: styles.title,
        message: styles.message,
        icon: styles.icon,
        closeButton: styles.closeButton,
        ...classNames,
      }}
      {...props}
    />
  );
};