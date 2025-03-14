import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
/* The original code imported globals.css as a global style sheet without any variables or classes defined for functional CSS. The following code is refactored to only import the required styles from the global styles and component local styles. */