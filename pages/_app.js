import { AppProps } from 'next/app';

interface NextPageWithLayout {
  getLayout?: () => React.ReactNode;
}

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

default export function App({ Component, pageProps }: MyAppProps): JSX.Element {
  return <Component {...pageProps} />;
}

// Removed extra parenthesis at the end of the function
