import Typography from '@mui/material/Typography';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <title>My Page</title>
      </Head>
      <main>
        <Typography component='h2' variant='h2'>My Page</Typography>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;