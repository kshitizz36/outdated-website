import { Html, Head, Main, NextScript } from 'next/document';
import defaultSeo from '../components/DefaultSEO';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {defaultSeo}
      </Head>
      <body className="antialiased">
        <Main />
        <script src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/js/fontawesome.min.js"></script>
        <noscript><i className="fas fa-exclamation-triangle"></i> You need to enable JavaScript to run this site.</noscript>
        <NextScript />
      </body>
    </Html>
  );
}