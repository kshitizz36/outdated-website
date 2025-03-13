import type { NextPage } from 'next';
import Head from 'next/head';

export default function App({ Component, pageProps }: NextPage) {
  return (
    <div>
      <Head />
      <Component {...pageProps} />
    </div>
  );
}