import Document, { Html, Head, Main, NextScript } from "next/document";

export default function Document({ Html, Head, Main, NextScript }) {
  return (
    <Html lang="en">
      <Head />
      <body className="dark:bg-gray-900 dark:text-white dark:font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}