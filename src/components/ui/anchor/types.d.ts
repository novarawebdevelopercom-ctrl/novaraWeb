import { AnchorHTMLAttributes,  ReactNode } from "react";
import { ColorVariant, Variants } from "../../types";

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children?: ReactNode;
  color?: ColorVariant;
  variant?: Variants;
  fullWidth?: boolean;
  startIcon?: ReactNode | null;
  endIcon?: ReactNode | null;
  label?: ReactNode; // اضافه کردن label
  sx?: React.CSSProperties | Record<string, any>;
}