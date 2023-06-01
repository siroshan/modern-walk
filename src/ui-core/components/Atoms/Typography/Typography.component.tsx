import { cva } from 'class-variance-authority';
import { TypographyProps } from './Typography.type';
import { cn } from '../../../../lib/utils';
import React from 'react';

export const typographyVariants = cva('w-full m-4 capitalize', {
  variants: {
    variant: {
      h1: 'font-bold text-5xl',
      h2: 'font-bold text-4xl',
      h3: 'font-bold text-3xl',
      h4: 'font-bold text-2xl',
      body: 'font-normal text-base',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';

export default Typography;
