// Remove import statement by importing styles in a more modern way using the next/config module
import { appDir, publicUrlWithHash, publicUrl } from 'next/config';

// If you still need to dynamically import components, use getStaticProps. Here is an updated version of your file using this approach.
import Head from 'next/head';  // Next.js needs to update React version to dynamically import on getStaticProps

export default function App({ Component, pageProps }) {
  const { appDir, publicUrlWithHash, publicUrl } = require('next/config').default();

  return (
    <>
      <Head>
        <link rel="stylesheet" href={appDir + "/styles/globals.css"} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}