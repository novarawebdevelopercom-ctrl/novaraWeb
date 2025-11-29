import { JSX, ReactNode } from 'react';
import { ColorVariant, SizeVaraint } from '@/components/ui/types';

export type TextWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;
export type Tags =
  | 'p'
  | 'span'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'strong'
  | 'em'
  | 'mark'
  | 'small'
  | 'del'
  | 'ins'
  | 'sub'
  | 'sup';

export type TypographyProps = {
  size?: SizeVaraint;
  children: ReactNode;
  weight?: TextWeight;
  lineClamp?: number;
  align?: 'center' | 'right' | 'left';
  direction?: 'underline' | 'line-through';
  transform?: 'uppercase' | 'capitalize';
  style?: 'italic';
  className?: string;
  color?: ColorVariant;
} & (
  | {
      as?: Exclude<Tags, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
      truncate?: 'end' | 'start';
      inherit?: boolean;
    }
  | {
      as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
      truncate?: undefined;
      inherit?: undefined;
    }
);
