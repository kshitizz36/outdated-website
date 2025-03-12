import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
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