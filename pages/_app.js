import { AppProps } from 'next/app';

interface AppPropsWithInitialProps extends AppProps {
  initialProps: {
    props: any;
  };
}

import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppPropsWithInitialProps) => {
  return <> {
    <Head>
      <title>My App</title>
    </Head>
    {
       <Component  {...pageProps} />
    }
  </>;
};

export default MyApp;

import '@/styles/globals.css';