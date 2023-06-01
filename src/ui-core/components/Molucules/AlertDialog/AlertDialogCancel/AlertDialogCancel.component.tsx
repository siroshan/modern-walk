import { FC, forwardRef } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { buttonVariants } from '../../../Atoms/Button';
import { cn } from '../../../../../lib/utils';

const AlertDialogCancel = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel ref={ref} className={cn(className)} {...props} />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export default AlertDialogCancel;
