import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// The original code used to import '@/styles/globals.css'; globally, but this is now handled as part of the Next.js configuration.