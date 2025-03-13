import Document, { Head, Main, NextScript } from 'next/document';';

export default function Document({ Html }) {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};