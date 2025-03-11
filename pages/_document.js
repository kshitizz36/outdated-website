import Document, { Head, Main, Title, Meta, Link, Script, NextScript } from 'next/document';


export default class Document extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  };


  render() {
    return (
      <html lang={'en'}
      >
        <head
        />
        <body
          className={'antialiased'}
        >
          <Main />
          <div>
            <Title></Title>
            <Meta charSet={'utf-8'} />
            <Meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
            <Link rel={'icon'} href={'/favicon.ico'} />
            <title>Home</title>
          </div>
          <div>
            <script>
              console.log('hello world');
            </script>
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}