import '../styles/globals.css';
import type { NextPage } from 'next';

function App({ Component, pageProps }: { Component: NextPage; pageProps: { [key: string]: any } }) {
  return <Component {...pageProps} />;
}

export default App;