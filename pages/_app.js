import { AppType } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

interface AppProps {
  Component: React.ComponentType;
  pageProps: any;
}

interface AppType {
  getInitialprops: () => Promise<any> | void;
  Component: React.ComponentType;
  pageProps: any;
}