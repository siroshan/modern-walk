import * as React from 'react';
import { cn } from '../../../../lib/utils';
import { InputProps } from './Input.type';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, helperText, ...props }, ref) => {
    return (
      <>
        <input
          type={type}
          className={cn(
            `${
              error ? 'border-danger' : 'border-input'
            } flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className='text-left text-sm font-normal text-danger'>
            {helperText}
          </span>
        )}
      </>
    );
  }
);
Input.displayName = 'Input';

export default Input;
