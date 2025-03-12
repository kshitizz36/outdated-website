# Import the necessary components directly from Next.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

# Define the Document component
export default class Document extends Document {
  # Render the HTML, Head and Body components
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='antialiased'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

### Explanation ###

In Next.js version 10 and later, you need to inherit from the `Document` class from `next/document` module and use the `render` method to return the JSX.

The original code was written for an old version of Next.js where you could directly export the JSX. But now it's a class based component and you need to use the `render` method to return the JSX.