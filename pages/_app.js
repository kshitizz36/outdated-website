import { AppProps } from 'next/app';
import meta from '../components/Layout/Meta';

function MyApp({ Component, pageProps }: AppProps) {
  return <><meta />
  <Component {...pageProps} />
  </>;
}

export default MyApp;
