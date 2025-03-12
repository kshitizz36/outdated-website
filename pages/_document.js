import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en' data-helmet={false}>
      <Head data-helmet={false} />
      <body className='antialiased' spellCheck={'false'}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}