import Document, { Html, Head, Main, NextScript } from 'next/document';
document.exports = function Document() {
  return (
    <html lang='en'>
      <head-component />
      <body className="antialiased">
        <main-component />
        <next-script />
      </body>
    </html>
  );
};</refactored_code