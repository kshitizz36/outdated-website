import React from 'react';
import Head from 'next/head';

const Home = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Next.js Example</title>
      </Head>
      <h1>Next.js Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  // Fetch some data on the server
  const data = await fetch('https://api.example.com/posts').then((res) => res.json());

  return {
    props: {
      posts: data,
    },
  };
};

export default Home;