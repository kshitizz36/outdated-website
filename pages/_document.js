import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends Document {
  static async getInitialProps({ renderPage }) {
    return await Document.getInitialProps({ renderPage });
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}