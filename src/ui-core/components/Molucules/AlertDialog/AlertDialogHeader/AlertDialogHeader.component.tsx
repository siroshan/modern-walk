import { cn } from '../../../../../lib/utils';

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 p-6 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = 'AlertDialogHeader';

export default AlertDialogHeader;
