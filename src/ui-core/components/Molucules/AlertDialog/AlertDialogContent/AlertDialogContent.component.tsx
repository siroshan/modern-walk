import { forwardRef } from 'react';
import { AlertDialogPortal } from '../AlerDialogPortal';
import { AlertDialogOverlay } from '../AlertDialogOverlay';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cn } from '../../../../../lib/utils';

const AlertDialogContent = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed z-50 grid w-full max-w-lg scale-100 gap-4 rounded-2xl border bg-background opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full',
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

export default AlertDialogContent;
