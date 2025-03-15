import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {\n  return (\n    <Document>\n      <Html lang={'en'}>\n        <Head />\n        <body className={'antialiased'}>\n          <Main />\n          <NextScript />\n        </body>\n      </Html>\n    </Document>\n  );\n}