import React from 'react';
import Head from 'next/head';

import { GetServerSideProps } from 'next';

const Home = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Updated Next.js Example</title>
      </Head>
      <h1>Updated Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch('https://api.example.com/posts').then((res) => res.json());

  return {
    props: {
      posts: data,
    },
  };
};

export default Home;