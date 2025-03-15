import Document, { Html, Head, Main, NextScript } from 'next/document';
{
	render: () => (
		  <><Html lang='en'>
			 <Head />
			 <body className='antialiased'>
			  <>{Main()}</> 
			  <>{NextScript()}</>
			  <\/body>
		 <\/Html>\
		<\/>
	);
}
