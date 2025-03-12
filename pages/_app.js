import {} from "next";
import Head from "next/head";
import Meta from "../components/Meta";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>    <Meta title />

        <Component {...pageProps} />
    </>    
    )    
}

export default MyApp;

