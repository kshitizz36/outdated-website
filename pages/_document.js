import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await super.getInitialProps(ctx);
    return {
      ...initialProps,
      cookies: ctx.req ? ctx.req.headers.cookie : null,
    };
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