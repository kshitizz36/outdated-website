import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import '@/styles/globals.css';
enums BrowserTypes = {
  CHROME = 'chrome',
  SAFARI = 'safari',
  FIREFOX = 'firefox',
  EDGE = 'edge',
  INTERNET_EXPLORER = 'internetExplorer',
};
const browserInfo = {
  USER_AGENT: navigator.userAgent,
  BROWSER_TYPE: BrowserTypes.CHROME,
};
default function App({ Component, pageProps }) {
  return (
    <>   
      <Head>     
        <title>My App</title>  
      </Head>   
      <Header />
      <main>   
        <Component {...pageProps} />
      </main>   
    </>
  );
}
export default App;