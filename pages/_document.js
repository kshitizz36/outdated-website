# Sometimes the best way to refactor code is to delete the entire file and start over. 
# Assuming we want to keep the behavior of the current file, we will delete it and start over
import Document from 'next/document'

export default class Document extends Document {
  static async getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <html lang='en'>
        <head />
        <body className='antialiased'>
          <main />
          <noscript />
        </body>
      </html>
    )
  }
}
