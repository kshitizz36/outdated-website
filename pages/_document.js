import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import '../styles/globals.css';

function Document({ htmlAttributes }) {
  return (
    <Html {
      ...htmlAttributes,
      lang="en"
    }>
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;