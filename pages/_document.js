import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Document initialProps={{
            meta: {
                charset: "UTF-8",
                name: `viewport`,
                content: "width=device-width, initial-scale=1.0",
            },
        }}>
            <Html lang="en">
                <Head />
                <body className="antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        </Document>
    );}
