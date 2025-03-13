import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head />
      <Component {...pageProps} />
    </div>
  );
}