import { CartProvider } from '@context/cart';
import { UserProvider } from '@context/user';
import { Toaster } from '@ui-core/components';
import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavLayout } from '@ui-core/layout';
import React from 'react';

import '@styles/globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  const isRemoveLayout = [`/sign-in`, `/sign-out`].includes(router.pathname);

  const LayoutComponent = isRemoveLayout ? React.Fragment : NavLayout;
  return (
    <div className={roboto.className}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <CartProvider>
            <LayoutComponent>
              <Component {...pageProps} />
              <Toaster />
            </LayoutComponent>
          </CartProvider>
        </UserProvider>
      </QueryClientProvider>
    </div>
  );
}