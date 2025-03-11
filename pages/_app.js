import Head from 'next/head'; import '../styles/globals.css';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>My App</title>
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;