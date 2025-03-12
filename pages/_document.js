import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends Document {
  render() {
    return (
      <>  /* Supports React 17.0+ */
        <Html lang='en'>
          <head>{this.props.head}</head>
          <body className='antialiased'>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}
