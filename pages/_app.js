import { AppProps } from 'next/app';

interface AppPropsWithLayout {
  Component: React.ReactNode;
  pageProps: { [key: string]: any };

  children?: React.ReactNode;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />;
}