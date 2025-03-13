import Document, { Html, Head, Main, NextScript } from 'next/document';

document class MyDocument extends Document {
  // Replaced `export default function Document()` with a new document class to apply changes.
  static async getInitialProps(ctx) {
    // next.js documentation suggests to call for every page in the app.
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      metaDescription: '' // Add more props here if needed
    };
  }

  render() {
    // Remove `export` keyword from function
    return (
      <Html lang="en">
        <Head />       
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}