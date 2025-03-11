import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends Document {
  static async getInitialProps({ renderPage }) {
    const { html, head, error } = renderPage();
    return { html, head, error };
  }

  render() {
    return (
      <Html lang={''}):
        <Head />
        <body className={''}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )}
  }