import { AppProps } from 'next/app';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

import Header from 'components/Header';

import { GlobalStyle } from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
      <Toaster position="top-right" reverseOrder={false} />
      <GlobalStyle />
    </NextAuthProvider>
  );
}

export default MyApp;
