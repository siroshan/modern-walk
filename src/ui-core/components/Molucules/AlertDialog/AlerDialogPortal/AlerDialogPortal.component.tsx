import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cn } from '../../../../../lib/utils';

const AlertDialogPortal = ({
  className,
  children,
  ...props
}: AlertDialogPrimitive.AlertDialogPortalProps) => (
  <AlertDialogPrimitive.Portal className={cn(className)} {...props}>
    <div className='fixed inset-0 z-50 flex items-end justify-center sm:items-center'>
      {children}
    </div>
  </AlertDialogPrimitive.Portal>
);

AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;

export default AlertDialogPortal;
