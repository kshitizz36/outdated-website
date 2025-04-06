import React from 'react';
import Head from 'next/head';

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
};

export const getServerSideProps = async () => {
  const res = await fetch('https://api.example.com/posts');
  return {
    props: {
      posts: await res.json(),
    },
  };
};

export default Home;