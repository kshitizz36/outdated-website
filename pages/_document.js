import Document, { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  const htmlAttrs = {
    lang: 'en',
  };

  return (
    <Html {...htmlAttrs}>
      <Head/>
      <body className="antialiased">
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
}