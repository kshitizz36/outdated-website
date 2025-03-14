import Document, { Html, Head, Main, NextScript } from 'next/document';

class Document extends Document {
  render() {
    return (
      <Html lang={'en'}>
        <Head />
        <body className='antialiased'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;