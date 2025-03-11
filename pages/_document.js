import Document, { Head, Main, NextScript } from 'next/document';

export default class Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      title: 'Custom Document',
    };
  }

  render() {
    return (
      <Html lang={'en'}>
        <Head />
        <body className={'antialiased'}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}