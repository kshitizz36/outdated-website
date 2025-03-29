import Document, { Head, Main, NextScript } from 'next/document';

export const getServerSideProps = async () => {
  return {
    props: {}
  };
}

export default function Document() {
  return (
    <html lang='en'>
      <head />
      <body className='antialiased dark'>
        <main />
        <noscript />} */>
          <NextScript() />
        </noscript>
      </body>
    </html>
  );
}