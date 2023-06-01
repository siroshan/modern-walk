import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';
import { cn } from '../../../../../lib/utils';

const AlertDialogOverlay = forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in',
      className
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

export default AlertDialogOverlay;
