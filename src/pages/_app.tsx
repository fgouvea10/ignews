import Header from 'components/Header';
import { AppProps } from 'next/app';

import { GlobalStyle } from './styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
