import Document, { Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <html lang="en">
      <head></head>
      <body className="antialiased">
        <main>
          {Document.getInitialProps ? Document.getInitialProps(...arguments) : Document.getInitialProps()}</main>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <script
          dangerouslySetInnerHTML=
          {
            __NEXT_DATA__: 
              JSON.stringify(
                {
                  props: {
                    initialReduxState: 
                      Redux.
                    } // The props that should be passed when you navigate to the page.
                  ,
                  initialReduxState: 
                    Redux.
                  } // The state that should be passed when you navigate to the page.
                ,
                2
              ),
          }
        />

        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <script
          dangerouslySetInnerHTML=
          {
            __NEXT_DATA__:
              JSON.stringify(
                {
                  __NEXT_DATA__:
                    JSON.stringify(
                      {
                        props: {
                          Redux: Redux
                        } // The props that should be passed when you navigate to the page.
                      },
                      2
                    ),
                }, 2
              ),
          }
        />
      </body>
    </html>
  );
}