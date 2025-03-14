import Document, { Html, Head, Main, NextScript } from 'next/document';

/*
 * nextDocument is the root component for your Next.js app.
 * It is required for every Next.js project.
 * This doc is being deprecated, the new main entry point is [
 * src/pages/_document.js](https://nextjs.org/docs/advanced-features/customize-document)
 *.
 *
 * If you update this file to remove the unused imports you can take advantage
 * of the [esbuild post-processing features](https://nextjs.org/docs/advanced-features/load-app-wide-config#post-processing).
 */

export default async function Document() {
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