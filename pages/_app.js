import React from 'react';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My Next App</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}