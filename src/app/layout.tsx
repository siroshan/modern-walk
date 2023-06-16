import { CartProvider } from '@context/cart';
import { UserProvider } from '@context/user';
import { QueryClientProvider } from '@context/queryClient';
import { NavLayout } from '@ui-core/layout';

import '@styles/globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isRemoveLayout = [`/sign-in`, `/sign-out`].includes(router.pathname);

  // const LayoutComponent = isRemoveLayout ? React.Fragment : NavLayout;
  return (
    <html lang='en' className={roboto.className}>
      <QueryClientProvider>
        <UserProvider>
          <CartProvider>
            <body>
              <NavLayout>{children}</NavLayout>
            </body>
          </CartProvider>
        </UserProvider>
      </QueryClientProvider>
    </html>
  );
}
