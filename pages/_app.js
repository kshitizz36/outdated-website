import '../../styles/globals.css';

import Head from 'next/head';

default export function App({ Component, pageProps }) {
  return (
    <> 
      <Head/>
      <Component {...pageProps} />
    </> 
  );
}
