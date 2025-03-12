import { AppProps } from 'next/app';
import Head from 'next/head';
import '@styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const meta = Component.getInitialProps ? Component.getInitialProps(pageProps) : null;

  return (
    <> 
      <Head>{meta && <title>{meta.title}</title> ? meta.title : ''} </Head>
      <Component {...pageProps} /> 
    </>
  );
};

export default MyApp;