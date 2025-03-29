import Head from 'next/head';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export const getStaticProps = async () => ({
  props: {},
});

export default function Document() {
  return (
    <Html lang={'en'}>
      <Head />
      <body className={'antialiased'}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}