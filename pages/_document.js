import Document, { Html, Head, Main, NextScript } from 'next/document';

do.
export default async function Document() {
    return (
	<Html lang='en'></Html>
	<Head></Head>
    <body className='antialiased'>
		<Main />
		<NextScript />
    </body>
);
}