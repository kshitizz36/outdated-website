import { AppType } from 'next/app';

import '@@/styles/globals.css';

export default function App({ Component, pageProps }: { Component: AppType, pageProps: object }) {
  return <Component {...pageProps} />;
}