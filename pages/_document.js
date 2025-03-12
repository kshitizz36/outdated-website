import Document, { Html, Head, Main, NextScript } from 'next/document'; 

 export const getServerSideProps = () => ({
    props: {}
});

 export default function Document({ Component, pageProps }) {
    return (
        <Html lang="en">
            <Head />
            <body className="dark:bg-gray-900">
                <Main />
                <NextScript />
                <Component {...pageProps} />
            </body>
        </Html>
    );
}