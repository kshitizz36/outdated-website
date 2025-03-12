import styles from '@/styles/globals.css';
import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/pageูนprops';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <link rel="noopener noreferrer" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
};
export default MyApp;