import Head from 'next/head';
import Navbar from '../components/Navbar';
import style from '../styles/globals.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className={style.container}> 
      <Navbar />
      <Component {...pageProps} />
      <Head>
        <title>My App</title>
      </Head>
    </div>
  );
}