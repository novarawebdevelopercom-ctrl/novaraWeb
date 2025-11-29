import React from 'react';
import { Text, Title } from '@mantine/core';
import type { TitleOrder, TypographyProps } from './types';

export const Typography: React.FC<TypographyProps> = ({
  children,
  as = 'p',
  size,
  weight,
  direction,
  align,
  style,
  transform,
  lineClamp,
  className,
  color,
  truncate,
  inherit,
}) => {
  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as)) {
    return (
      <Title
        order={+as[1] as TitleOrder}
        component={as}
        size={size}
        fw={weight}
        td={direction}
        ta={align}
        tt={transform}
        fs={style}
        lineClamp={lineClamp}
        c={color}
        classNames={{
          root: className,
        }}
      >
        {children}
      </Title>
    );
  }

  return (
    <Text
      component={as}
      size={size}
      fw={weight}
      td={direction}
      ta={align}
      tt={transform}
      fs={style}
      truncate={truncate}
      lineClamp={lineClamp}
      inherit={inherit}
      c={color}
      classNames={{
        root: className,
      }}
    >
      {children}
    </Text>
  );
};
