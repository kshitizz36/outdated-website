import Document, { Html, Head, Main, NextScript } from '@next/app'

export default function Document({ Component, pageProps }) {
  return (
    <Html lang='en'>
      <Head />
      <body className='antialiased'>
        <Component {...pageProps} />
        <next/script strategy='afterInteractive'>
          <script src="https://example.com/script.js"></script>
           <NextScript />
        </next/script>
      </body>
    </Html>
  );
}