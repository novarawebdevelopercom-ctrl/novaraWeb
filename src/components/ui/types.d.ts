export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ColorVariant =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'dark'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'teal'
  | (string & {});
export type RadiusVarint = SizeVariant | number;
export type Variants = 'filled' | 'light' | 'outline' | 'default' | 'white' | 'transparent';
