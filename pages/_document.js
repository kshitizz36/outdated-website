import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />;
        <body className='dark'>{/* antialiased is not a suitable dark mode className, use dark instead */}
          <Main />;
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Also consider removing the unused export 'Head' and 'Main'.