# This is a Next.js project using TypeScript
import { AppProps } from 'next/app';

import '@/styles/globals.css';

interface MyAppProps extends AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;