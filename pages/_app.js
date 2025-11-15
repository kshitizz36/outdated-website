import styles from '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Import styles from the global.css file using the import statement
// The default export is used to export the App function