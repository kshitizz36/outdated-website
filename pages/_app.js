import React from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}