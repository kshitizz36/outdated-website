# This is a NextJS document file, let's create a new file called Document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static getInitialProps(ctx) {
    return nextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='antialiased'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;