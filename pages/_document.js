import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function Document({ htmlAttributes }) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta httpEquiv="content-security-policy" content="upgrade-insecure-requests" />
        <meta name="theme-color" content="#2f5e9f" />
        <meta name="title" content="My site" />
        <meta name="description" content="My site" />
        <meta name="keywords" content="my site" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta property="og:title" content="My site" />
        <meta property="og:description" content="My site" />
        <meta property="og:image" content="/open-graph-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@johnDoe" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        
        <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@100;300;400;500;700&display=swap" rel="stylesheet" />

        <Head />
      </head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
      </body>
    </html>
  );
}