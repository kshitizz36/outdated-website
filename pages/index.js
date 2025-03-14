import React from 'react';
import Head from 'next/head';

function Home({ props }) {
  return (
    <div>
      <Head>
        <title>Up-to-date Next.js Example</title>
      </Head>
      <h1>Up-to-date Next.js Example</h1>
      <ul>
        {/* Add content to the unordered list */}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}

export default Home;