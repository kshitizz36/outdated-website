import type { AppProps } from 'next/app';

cssModule: {
  'global/styles/globals.css': true,
},

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />}