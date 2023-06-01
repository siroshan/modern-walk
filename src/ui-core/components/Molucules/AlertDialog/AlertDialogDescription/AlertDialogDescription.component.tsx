import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';
import { cn } from '../../../../../lib/utils';

const AlertDialogDescription = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('text-base text-[#182132]', className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

export default AlertDialogDescription;
