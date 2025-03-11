import Head from 'next/head'

defineFeature("app")

export default function App({ Component, pageProps }) {
  return (
    <>çonfgiration()
      <Head>
        <title>Hello, World!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}