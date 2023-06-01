import { ToastTitle } from '../../../Molucules/Toast/ToastTitle';
import { ToastViewport } from '../../../Molucules/Toast/ToastViewport';
import { ToastClose } from '../../../Molucules/Toast/ToastClose';
import { Toast } from '../../../Molucules/Toast/Toast';
import { useToast } from './useToast';
import { ToastDescription } from '../../../Molucules/Toast/ToastDescription';
import { ToastProvider } from '../ToastProvider';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className='grid gap-1'>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
