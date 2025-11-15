import { AppProps } from 'next/app';
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// No import for global CSS; styles will be handled through global CSS in Next.js 9.3 and above.
// Instead of importing global CSS, use the next.config.js file to handle CSS.