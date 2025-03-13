import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends Document {
  render() {
    return (
      <html lang="en">
        <head />
        <body className="antialiased">
          <main />
          <noscript>
            <NextScript />
          </noscript>
        </body>
      </html>
    );
  }
}
