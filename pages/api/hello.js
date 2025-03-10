Typescript File
import { NextPage } from 'next';
import Head from 'next/head';

function HomePage() {
  return (
    <Head>
      <title>Home</title>
    </Head>
    <div className="container">
      <h1>welcome to the home page</h1>
    </div>
  );
}

const getServerSideProps = async () => {
  return {
    props: {}
  };
};

export default HomePage;

// The data object is not necessary when using Next.js by default