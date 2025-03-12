import Document, { Html, Head, Main, NextScript } from 'next/document';

const MyApp = ({ Component, pageProps }) => {
  return (<>
    <Html lang='en'>
      <Head />
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  </>);
};

export default MyApp;