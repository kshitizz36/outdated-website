import Head from 'next/head';
import '@/styles/globals.css';
default function App({ Component, pageProps }) {
  return (
    <html>
      <>/<Head />/<Component {...pageProps} />/</>
    </html>
)
;  }
export default App;