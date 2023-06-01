import * as React from 'react';
import { cn } from '../../../../lib/utils';
import { PasswordInputProps } from './PasswordInput.type';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, isShow, setIsShow, ...props }, ref) => {
    return (
      <div className='flex h-10 w-full flex-row justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background'>
        <input
          type={isShow ? undefined : 'password'}
          className={cn(
            'w-full placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        <button
          className='w-fit rounded-full'
          type='button'
          onClick={() => setIsShow((s) => !s)}
        >
          {isShow ? <EyeOff /> : <Eye />}
        </button>
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
