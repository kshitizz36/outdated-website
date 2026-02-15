import '@/styles/globals.css';

type AppProps = {
  Component: React.ComponentType<any>;
  pageProps: any;
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}