import Document, { Html, Head, Main, NextScript } from 'next/document';

document.propTypes = {
  prop: PropTypes.object,
};
document.defaultProps = {};

defaultexport default Document;

const DocumentContainer = props => {
  return (
    <Html lang='en'>
      <Head />
      <body className='antialiased' {...props}>
        <Main />
        <div id='__next'>
          <NextScript />
        </div>
      </body>
    </Html>
  );
};

declare global {
  interface Window {
    __NEXT_DATA__:
      { url:new URL('/'),
        buildId: string,
        page:/.
      };
  }
};