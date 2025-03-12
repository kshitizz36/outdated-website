import Document, { Head, Html, Main, NextScript } from 'next/document';
export default function Document({ Html, Head, Main, NextScript }) {
  return () => {
    return (
      <Html lang="en">
        <Head />
        <body className="antialiased">
          <Main /> 
          <NextScript />
        </body>
      </Html>
)
 };
}