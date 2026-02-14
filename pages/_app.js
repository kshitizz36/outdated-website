import '@/styles/globals.css';

export default function App({ Component, pageProps }: { Component: React.ComponentType; pageProps: any }) {
  return <Component {...pageProps} />;
}