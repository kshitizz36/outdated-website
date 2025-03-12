// Replace import statement with ES6 import syntax
import { App } from 'next/app';
// Remove the default export as Next.js does it automatically
// Import global CSS file using a CDN to avoid Next.js' behavior of inlining CSS
import 'styles/globals.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;