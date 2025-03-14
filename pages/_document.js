import Document, { Head, Html, Main, NextScript } from '\u0022next/document\u0022';
。
export const getServerSideProps = async () => ({
  props: {}
});

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}