import { VariantProps } from 'class-variance-authority';
import { typographyVariants } from './Typography.component';

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {}
