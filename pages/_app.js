import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta charSet={'UTF-8'} />
            </Head>
            <Script strategy='afterInteractive' src='/_next/static/chunks/main.js'></Script>
            <Component {...pageProps} />
        </div>
    );
}