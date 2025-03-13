import Document, { Html, Head, Main, NextScript } from 'next/document';

default export function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>);}