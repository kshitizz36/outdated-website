import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends Document {
  static async getInitialProps(ctx) {
    return await super.getInitialProps(ctx);
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

// If you just want to remove TypeScript and make the Document component a plain JavaScript component
// remove type and add import 'type' is not defined, so we will import Document without type; then delete the type mentioned manually;